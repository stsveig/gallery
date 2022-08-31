// test/helpers/merkleTree.js
// SPDX-License-Identifier: MIT
// from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/test/helpers/merkleTree.js

import { bufferToHex, keccak256 } from 'ethereumjs-util';
import web3 from 'web3';

export default class MerkleTree {
  elements: Buffer[];
  layers: Buffer[][];

  constructor(elements: string[]) {
    // Filter empty strings and hash elements
    this.elements = elements
      .filter((el) => el)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .map((el) => Buffer.from(web3.utils.hexToBytes(web3.utils.sha3(el)!)));
    // Sort elements
    this.elements.sort(Buffer.compare);

    // Deduplicate elements
    this.elements = this.bufDedup(this.elements);

    // Create layers
    this.layers = this.getLayers(this.elements);
  }

  getLayers(elements: Buffer[]) {
    if (elements.length === 0) {
      throw new Error('Empty tree');
    }

    const layers = [];
    layers.push(elements);

    // Get next layer until we reach the root
    while (layers[layers.length - 1].length > 1) {
      layers.push(this.getNextLayer(layers[layers.length - 1]));
    }

    return layers;
  }

  getNextLayer(elements: Buffer[]) {
    return elements.reduce((layer: Buffer[], el, idx, arr) => {
      if (idx % 2 === 0) {
        // Hash the current element with its pair element
        layer.push(this.combinedHash(el, arr[idx + 1]));
      }

      return layer;
    }, []);
  }

  combinedHash(first: Buffer, second: Buffer) {
    if (!first) {
      return second;
    }

    if (!second) {
      return first;
    }

    return Buffer.from(keccak256(this.sortAndConcat(first, second)));
  }

  getRoot() {
    return this.layers[this.layers.length - 1][0];
  }

  getHexRoot() {
    return bufferToHex(this.getRoot());
  }

  getProof(el: string) {
    let idx = this.bufIndexOf(el, this.elements);

    if (idx === -1) {
      throw new Error('Element does not exist in Merkle tree');
    }

    return this.layers.reduce((proof, layer) => {
      const pairElement = this.getPairElement(idx, layer);

      if (pairElement) {
        proof.push(pairElement);
      }

      idx = Math.floor(idx / 2);

      return proof;
    }, []);
  }

  getHexProof(el: string) {
    const proof = this.getProof(el);

    return this.bufArrToHexArr(proof);
  }

  getPairElement(idx: number, layer: Buffer[]) {
    const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;

    if (pairIdx < layer.length) {
      return layer[pairIdx];
    }

    return null;
  }

  bufIndexOf(el: string, arr: Buffer[]) {
    let hash;

    // Convert element to 32 byte hash if it is not one already
    if (el.length !== 32 || !Buffer.isBuffer(el)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      hash = Buffer.from(web3.utils.hexToBytes(web3.utils.sha3(el)!));
    } else {
      hash = el;
    }

    for (let i = 0; i < arr.length; i++) {
      if (hash.equals(arr[i])) {
        return i;
      }
    }

    return -1;
  }

  bufDedup(elements: Buffer[]) {
    return elements.filter((el, idx) => idx === 0 || !elements[idx - 1].equals(el));
  }

  bufArrToHexArr(arr: Buffer[]) {
    if (arr.some((el) => !Buffer.isBuffer(el))) {
      throw new Error('Array is not an array of buffers');
    }

    return arr.map((el) => '0x' + el.toString('hex'));
  }

  sortAndConcat(...args: Buffer[]) {
    return Buffer.concat([...args].sort(Buffer.compare));
  }
}
