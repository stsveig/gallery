import { ReactNode, useState } from 'react';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import { FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

const originalData = {
  galleries: [
    {
      version: 0,
      id: 'f935f0283e7cd08ece5471ce982611ba',
      created_at: '2022-01-13T20:11:12.211799Z',
      last_updated: '2022-01-13T20:11:12.211799Z',
      owner_user_id: 'a3ff91986625382ff776067619200efe',
      collections: [
        {
          version: 0,
          id: '1ywJmADOhD51kqZeL1BhXGZWIJN',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 6 },
          name: 'i\u0026#39;m not a robot',
          collectors_note:
            'this question is for testing whether you are a human visitor and to prevent automated spam submissions',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvD1FIBJmxqGqZeyx4QOmDBE',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Captcha #9679',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'The CAPTCHAs',
              creator_address: '0xdc4c542a6121ac515835b0268b3c2222f70cdf2d',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/dpQmKjsIthJwhPLkBJxDaACITtBmmPsl4-xHLrIqJ0MkASkt6ejmRspl2_j9AvFpfwWel3WKvGr_skLI6p8P8V2EgQxvks1B-XHKQA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/dpQmKjsIthJwhPLkBJxDaACITtBmmPsl4-xHLrIqJ0MkASkt6ejmRspl2_j9AvFpfwWel3WKvGr_skLI6p8P8V2EgQxvks1B-XHKQA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/dpQmKjsIthJwhPLkBJxDaACITtBmmPsl4-xHLrIqJ0MkASkt6ejmRspl2_j9AvFpfwWel3WKvGr_skLI6p8P8V2EgQxvks1B-XHKQA=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvEyBbweDJPh7XvLIEIdM0Gy',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Captcha #8177',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'The CAPTCHAs',
              creator_address: '0xdc4c542a6121ac515835b0268b3c2222f70cdf2d',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/uhdERGbnp5AZQzmdRp0P4--DNRqinyZIbBQAxWfkylMQSyeVz5yhwM6PKESDdSEJpnaVJG1GF9sSdvAXuFZKhkYnw6YPZEw4ZK3ONA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/uhdERGbnp5AZQzmdRp0P4--DNRqinyZIbBQAxWfkylMQSyeVz5yhwM6PKESDdSEJpnaVJG1GF9sSdvAXuFZKhkYnw6YPZEw4ZK3ONA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/uhdERGbnp5AZQzmdRp0P4--DNRqinyZIbBQAxWfkylMQSyeVz5yhwM6PKESDdSEJpnaVJG1GF9sSdvAXuFZKhkYnw6YPZEw4ZK3ONA=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvJTQAXCsCv3aVXfwwuAIDwA',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Captcha #684',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'The CAPTCHAs',
              creator_address: '0xdc4c542a6121ac515835b0268b3c2222f70cdf2d',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/BBdn-hoc-k_ksnFXqweGvVrnf-3jnLON7aS_ATHPH_y47iqWXyQDRCAi5XsKdEZKdaZwHpB58TMKtJW4rHKFhWMx4tx9WJ3ARCBh',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/BBdn-hoc-k_ksnFXqweGvVrnf-3jnLON7aS_ATHPH_y47iqWXyQDRCAi5XsKdEZKdaZwHpB58TMKtJW4rHKFhWMx4tx9WJ3ARCBh=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/BBdn-hoc-k_ksnFXqweGvVrnf-3jnLON7aS_ATHPH_y47iqWXyQDRCAi5XsKdEZKdaZwHpB58TMKtJW4rHKFhWMx4tx9WJ3ARCBh=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvHAZsPBic3zhgsEiZVFTUpG',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Captcha #2956',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'The CAPTCHAs',
              creator_address: '0xdc4c542a6121ac515835b0268b3c2222f70cdf2d',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/eXC9FHNYPJUAZduQ_KgdwsBmimq6Akm5wsTBAykCCCJFHC9OwiuRSELp2eEnWgPD0jvgpABEDw9gCosJcARTiejFHcx4knCbyDVQeg',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/eXC9FHNYPJUAZduQ_KgdwsBmimq6Akm5wsTBAykCCCJFHC9OwiuRSELp2eEnWgPD0jvgpABEDw9gCosJcARTiejFHcx4knCbyDVQeg=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/eXC9FHNYPJUAZduQ_KgdwsBmimq6Akm5wsTBAykCCCJFHC9OwiuRSELp2eEnWgPD0jvgpABEDw9gCosJcARTiejFHcx4knCbyDVQeg=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvFjZxf4kMP40xQLbqrvtt7k',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Captcha #8437',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'The CAPTCHAs',
              creator_address: '0xdc4c542a6121ac515835b0268b3c2222f70cdf2d',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/gFU6p7jHGZfpSgr9Q85oc-cbY5IycOGbzAfpiO6uXFruPLFa4-ddigzU5iSaF2hTJCvtRB8fzN0d37qQf1aeiErvVz6AtjBFA3uzYQA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/gFU6p7jHGZfpSgr9Q85oc-cbY5IycOGbzAfpiO6uXFruPLFa4-ddigzU5iSaF2hTJCvtRB8fzN0d37qQf1aeiErvVz6AtjBFA3uzYQA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/gFU6p7jHGZfpSgr9Q85oc-cbY5IycOGbzAfpiO6uXFruPLFa4-ddigzU5iSaF2hTJCvtRB8fzN0d37qQf1aeiErvVz6AtjBFA3uzYQA=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvHQoz3yMFfImcmCTOrCHqFZ',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Captcha #2784',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'The CAPTCHAs',
              creator_address: '0xdc4c542a6121ac515835b0268b3c2222f70cdf2d',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/z4DXq9qec3wVm4Nff0fDnTe1Dq1hdOq2mkLWwPH3DtBbU692FEjqwO38yLVxouAuBecIfQnddohjly6iRuyoSJ3z9GhsBOPd6N3s_A',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/z4DXq9qec3wVm4Nff0fDnTe1Dq1hdOq2mkLWwPH3DtBbU692FEjqwO38yLVxouAuBecIfQnddohjly6iRuyoSJ3z9GhsBOPd6N3s_A=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/z4DXq9qec3wVm4Nff0fDnTe1Dq1hdOq2mkLWwPH3DtBbU692FEjqwO38yLVxouAuBecIfQnddohjly6iRuyoSJ3z9GhsBOPd6N3s_A=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '23cWNycLnRk4O03K4fRiMBLUtzS',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 2 },
          name: 'scenes',
          collectors_note:
            'left: leggenda by [stefano contiero](https://twitter.com/stefan_contiero) x [flamingoDAO](https://gallery.so/flamingodao) x gallery\r\nright: meridian by [matt deslauriers](https://twitter.com/mattdesl) x artblocks',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '23cW3V4v7TQx4gdD9PlbiziZAVf',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Leggenda #193',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flamingo Flutter',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/yOXNv7MHLCl3n76rPs9P-OJ5sPVL-wrAKdqFgp_wKz3XVIldcU8HEtNxRjA0d8X_UBTVd6MgQl16mtRcMngDwTSYjvVsWnSoaC1v',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/yOXNv7MHLCl3n76rPs9P-OJ5sPVL-wrAKdqFgp_wKz3XVIldcU8HEtNxRjA0d8X_UBTVd6MgQl16mtRcMngDwTSYjvVsWnSoaC1v=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/yOXNv7MHLCl3n76rPs9P-OJ5sPVL-wrAKdqFgp_wKz3XVIldcU8HEtNxRjA0d8X_UBTVd6MgQl16mtRcMngDwTSYjvVsWnSoaC1v=s250',
              animation_original_url:
                'https://generator.artblocks.io/0x13aae6f9599880edbb7d144bb13f1212cee99533/1000193',
            },
            {
              id: '1zsXvHQ92Z3K6K7JId3IIds3Q0B',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Meridian #878',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Meridian by Matt DesLauriers',
              creator_address: '0xcab81f14a3fc98034a05bab30f8d0e53e978c833',
              creator_name: 'mattdesl',
              image_url:
                'https://lh3.googleusercontent.com/PKG1A0VLxfWWrVYVt_-XV8NZAa5qdKZxEtNioVF99HhKY_FZqUO3Vw03o08POGXWiyIob-ptGjGF4-UOq4ZvUpvUYs0OKzJqQ1gv',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/PKG1A0VLxfWWrVYVt_-XV8NZAa5qdKZxEtNioVF99HhKY_FZqUO3Vw03o08POGXWiyIob-ptGjGF4-UOq4ZvUpvUYs0OKzJqQ1gv=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/PKG1A0VLxfWWrVYVt_-XV8NZAa5qdKZxEtNioVF99HhKY_FZqUO3Vw03o08POGXWiyIob-ptGjGF4-UOq4ZvUpvUYs0OKzJqQ1gv=s250',
              animation_original_url: 'https://generator.artblocks.io/163000878',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '23MHOXOYsSCYBUVMDRzuard2lBA',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 3 },
          name: 'gm',
          collectors_note:
            'on-chain svgs by [breck](https://twitter.com/brxckinridge) and [iain](https://twitter.com/isiain)',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '23MGvoyv8oevsZmuDn1ImNwQa1r',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: '',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'gm-onchain',
              creator_address: '0x2ba43efc033635250679fa7519433f80490b3d69',
              creator_name: '',
              image_url: 'https://storage.opensea.io/files/a37021871100bd4289af6fcf441ff9a9.svg',
              image_thumbnail_url:
                'https://storage.opensea.io/files/a37021871100bd4289af6fcf441ff9a9.svg',
              image_preview_url:
                'https://storage.opensea.io/files/a37021871100bd4289af6fcf441ff9a9.svg',
              animation_original_url: '',
            },
            {
              id: '23MGvsIpTNMz5N56kvOyqe5RqFF',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: '',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'gm-onchain',
              creator_address: '0x2ba43efc033635250679fa7519433f80490b3d69',
              creator_name: '',
              image_url: 'https://storage.opensea.io/files/09df62ac7bee2888904d29283b864100.svg',
              image_thumbnail_url:
                'https://storage.opensea.io/files/09df62ac7bee2888904d29283b864100.svg',
              image_preview_url:
                'https://storage.opensea.io/files/09df62ac7bee2888904d29283b864100.svg',
              animation_original_url: '',
            },
            {
              id: '23MGvrUSKqeWbSq0jIMt71k5OrL',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: '',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'gm-onchain',
              creator_address: '0x2ba43efc033635250679fa7519433f80490b3d69',
              creator_name: '',
              image_url: 'https://storage.opensea.io/files/3cbd21a6c69493da4bf55efac8dd0983.svg',
              image_thumbnail_url:
                'https://storage.opensea.io/files/3cbd21a6c69493da4bf55efac8dd0983.svg',
              image_preview_url:
                'https://storage.opensea.io/files/3cbd21a6c69493da4bf55efac8dd0983.svg',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '22frihnTynIotfarWXXEeY2FuT8',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 2 },
          name: '☁️⛓',
          collectors_note:
            'Clouds on Chains is a limited edition series of 420 programmatically generated NFTs by [Case Simmons](https://twitter.com/CgsYop). Each artwork is a unique one-of-a-kind digital painting, constructed of a controlled mix of cloud \u0026amp; chain imagery, shifting coloration, and various backgrounds.',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '22frPhwtpea134AF9MKfVfzq0YW',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'CloudsOnChains_155',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Clouds on Chains',
              creator_address: '0x45c3faff25afc69673034d20074bf9830206f252',
              creator_name: 'casesimmons',
              image_url:
                'https://lh3.googleusercontent.com/rBAxO8hIMONUnq4G2zo4LD8LVBy4Op2c-NaQbHTmE1o3jFZaEijiwvCjrXR9ghxKLTCVDKQa6rohL4Q_vXFaXR_zS7t-xkajXbPTKoA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/rBAxO8hIMONUnq4G2zo4LD8LVBy4Op2c-NaQbHTmE1o3jFZaEijiwvCjrXR9ghxKLTCVDKQa6rohL4Q_vXFaXR_zS7t-xkajXbPTKoA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/rBAxO8hIMONUnq4G2zo4LD8LVBy4Op2c-NaQbHTmE1o3jFZaEijiwvCjrXR9ghxKLTCVDKQa6rohL4Q_vXFaXR_zS7t-xkajXbPTKoA=s250',
              animation_original_url: '',
            },
            {
              id: '22frPe37iXJWdRvjUfvIE0WqGK1',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'CloudsOnChains_154',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Clouds on Chains',
              creator_address: '0x45c3faff25afc69673034d20074bf9830206f252',
              creator_name: 'casesimmons',
              image_url:
                'https://lh3.googleusercontent.com/KCo-vgwP_U1TDPApQUT9jAIkOK_hE3YKFRuhUBHSJCOy06a2KLEg6h7hrAkGl-sSManqweG9gei9C_tasquJfv6ILbPSUCtdoO9AI6k',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/KCo-vgwP_U1TDPApQUT9jAIkOK_hE3YKFRuhUBHSJCOy06a2KLEg6h7hrAkGl-sSManqweG9gei9C_tasquJfv6ILbPSUCtdoO9AI6k=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/KCo-vgwP_U1TDPApQUT9jAIkOK_hE3YKFRuhUBHSJCOy06a2KLEg6h7hrAkGl-sSManqweG9gei9C_tasquJfv6ILbPSUCtdoO9AI6k=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '22DnDMQsFbAQLHGQyDdOk9ZV1II',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 3 },
          name: '〰 streamlines 〰',
          collectors_note:
            'by [plottables](https://www.plottables.io/), a platform for generative artists working with pen plotters',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '22DmduTOwGCT8zXR3GfJZ6MH1JL',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #473',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/cdsYPzWxYuz5uaD9i_BUgQ8r5AR8_FTsGt1eoq1KI7fO0KQ3znsixh9zaC8pUx9_7atCF_c6d8C-Rb2zZZb8hnuWAKB5na-u4gzlyg',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/cdsYPzWxYuz5uaD9i_BUgQ8r5AR8_FTsGt1eoq1KI7fO0KQ3znsixh9zaC8pUx9_7atCF_c6d8C-Rb2zZZb8hnuWAKB5na-u4gzlyg=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/cdsYPzWxYuz5uaD9i_BUgQ8r5AR8_FTsGt1eoq1KI7fO0KQ3znsixh9zaC8pUx9_7atCF_c6d8C-Rb2zZZb8hnuWAKB5na-u4gzlyg=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/473',
            },
            {
              id: '22Dmdt5JQfkBwnb71xmd5pOCLZK',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #176',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/ZLlPQiWKSw-Hjs-fhGxIU_BwDXIusFE5v1lEyWGNjcmPsWq2dwy16LOsiAvxpSVyihmZepNDFf3_0yoOetb5vLLmAGQbdoRKE6v1ZA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/ZLlPQiWKSw-Hjs-fhGxIU_BwDXIusFE5v1lEyWGNjcmPsWq2dwy16LOsiAvxpSVyihmZepNDFf3_0yoOetb5vLLmAGQbdoRKE6v1ZA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/ZLlPQiWKSw-Hjs-fhGxIU_BwDXIusFE5v1lEyWGNjcmPsWq2dwy16LOsiAvxpSVyihmZepNDFf3_0yoOetb5vLLmAGQbdoRKE6v1ZA=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/176',
            },
            {
              id: '22DmdvFStLPTx6YY4fnQDwXkNyI',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #79',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/Q2IF4kP3ToQWzHCQs4nV5YIapsuBwPMgxfpMXTAOGwOBNViLNSXI-8U1x3t11jV0okvcjK-229BqyOv3j0mqQI6ZzAQ9bQODvaeoiV8',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/Q2IF4kP3ToQWzHCQs4nV5YIapsuBwPMgxfpMXTAOGwOBNViLNSXI-8U1x3t11jV0okvcjK-229BqyOv3j0mqQI6ZzAQ9bQODvaeoiV8=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/Q2IF4kP3ToQWzHCQs4nV5YIapsuBwPMgxfpMXTAOGwOBNViLNSXI-8U1x3t11jV0okvcjK-229BqyOv3j0mqQI6ZzAQ9bQODvaeoiV8=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/79',
            },
            {
              id: '22DmdxT1Rf3Pmac3stlC5PvRVaE',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #37',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/7KA6in1j1TsRcoP3ZxL6SW0Txr9KfjvTe38bXmD12vETquNkUNb-_VUMxazE7gCwwbM7qBjvGtom1vfgzYhmCFWA6sDxxWvu1fftYQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/7KA6in1j1TsRcoP3ZxL6SW0Txr9KfjvTe38bXmD12vETquNkUNb-_VUMxazE7gCwwbM7qBjvGtom1vfgzYhmCFWA6sDxxWvu1fftYQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/7KA6in1j1TsRcoP3ZxL6SW0Txr9KfjvTe38bXmD12vETquNkUNb-_VUMxazE7gCwwbM7qBjvGtom1vfgzYhmCFWA6sDxxWvu1fftYQ=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/37',
            },
            {
              id: '22DmdxTuBWwNtfjxK0xpSomuxPc',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #396',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/5OZtK4hTRS7_kr2QPYjXv3xpXkCrcsTLXz47QNgLpOzXXy0wwAIDEryVX2pCOPcSJQ_JtCDulKhVYQohhUlaEzFCbfll1uEhAFWQIZs',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/5OZtK4hTRS7_kr2QPYjXv3xpXkCrcsTLXz47QNgLpOzXXy0wwAIDEryVX2pCOPcSJQ_JtCDulKhVYQohhUlaEzFCbfll1uEhAFWQIZs=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/5OZtK4hTRS7_kr2QPYjXv3xpXkCrcsTLXz47QNgLpOzXXy0wwAIDEryVX2pCOPcSJQ_JtCDulKhVYQohhUlaEzFCbfll1uEhAFWQIZs=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/396',
            },
            {
              id: '22DmdvU9ZfrMNumKqgtGFMGUF33',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #366',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/f3OCQ2aHOq5ubiDVelrimwJm83rpcgPl7IyUNDVCjykx4ulkd2fr0mCcsjyjf2On9uQfH-Y5SF2I5cCXSmYPDzXG9FHvzms8ClKa',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/f3OCQ2aHOq5ubiDVelrimwJm83rpcgPl7IyUNDVCjykx4ulkd2fr0mCcsjyjf2On9uQfH-Y5SF2I5cCXSmYPDzXG9FHvzms8ClKa=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/f3OCQ2aHOq5ubiDVelrimwJm83rpcgPl7IyUNDVCjykx4ulkd2fr0mCcsjyjf2On9uQfH-Y5SF2I5cCXSmYPDzXG9FHvzms8ClKa=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/366',
            },
            {
              id: '22DmdwbzMmRUfto0FgTANvcctUh',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #54',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/c8knVww55d7nkQdLyxLKKwsAJzR0YJCX3OoEmzB8BRv45yQoUBVpCKDtVxjj5sUoxTEPMf7FYx3ZK7hqfGC3dqg-p1O-IBSXOPKMr1A',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/c8knVww55d7nkQdLyxLKKwsAJzR0YJCX3OoEmzB8BRv45yQoUBVpCKDtVxjj5sUoxTEPMf7FYx3ZK7hqfGC3dqg-p1O-IBSXOPKMr1A=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/c8knVww55d7nkQdLyxLKKwsAJzR0YJCX3OoEmzB8BRv45yQoUBVpCKDtVxjj5sUoxTEPMf7FYx3ZK7hqfGC3dqg-p1O-IBSXOPKMr1A=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/54',
            },
            {
              id: '22Dmds0kmG1Zx1EunSNG0Tzdm4t',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #309',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/a52cIxahtBUETLy_E13OMKPo1SThwEav7Lwiim5DYeZ-duaKjSWZgGA8vKy8zFV2K3R64r4gmgFjjbzimQ_4UydwvgyUGP_UMWGDnw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/a52cIxahtBUETLy_E13OMKPo1SThwEav7Lwiim5DYeZ-duaKjSWZgGA8vKy8zFV2K3R64r4gmgFjjbzimQ_4UydwvgyUGP_UMWGDnw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/a52cIxahtBUETLy_E13OMKPo1SThwEav7Lwiim5DYeZ-duaKjSWZgGA8vKy8zFV2K3R64r4gmgFjjbzimQ_4UydwvgyUGP_UMWGDnw=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/309',
            },
            {
              id: '22DmdxAxUPQeauW837Vr58mZFWa',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Streamlines #355',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Plottables',
              creator_address: '0xb8559af91377e5bab052a4e9a5088cb65a9a4d63',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/gKzJsio6Ehq-OMRtT15GyPyvrDMpEePByDXqTnMm7_ydCeANHuGf1AHYIZOAZNVAe5dz7anfs6MwKj0l6xGKCR3yn5IH88J-LUx33XM',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/gKzJsio6Ehq-OMRtT15GyPyvrDMpEePByDXqTnMm7_ydCeANHuGf1AHYIZOAZNVAe5dz7anfs6MwKj0l6xGKCR3yn5IH88J-LUx33XM=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/gKzJsio6Ehq-OMRtT15GyPyvrDMpEePByDXqTnMm7_ydCeANHuGf1AHYIZOAZNVAe5dz7anfs6MwKj0l6xGKCR3yn5IH88J-LUx33XM=s250',
              animation_original_url:
                'https://generator.artblocks.io/0xa319c382a702682129fcbf55d514e61a16f97f9c/355',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '21Qt76R6bIyM7fIDsBsgU9DrKCg',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 2 },
          name: 'Unsupervised — Machine Hallucinations',
          collectors_note:
            'Part of a series of algorithmic AI data paintings showcasing [Refik Anadol\u0026#39;s](https://twitter.com/refikanadol) unique collaboration with machine learning. Each image displays a cluster of “dream sequences,” as the artist goes through serendipitous allusions to modern expressions in the machine-mind.',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '21R0nOyxbZufeneB62KM6zbQwjd',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Unsupervised — Machine Hallucinations — MoMA Dreams — H #37',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Feral File #009 - Unsupervised',
              creator_address: '0x1d05cf6c6beb0c869851bfdb9510d4e44e855ad6',
              creator_name: 'FeralFile',
              image_url:
                'https://lh3.googleusercontent.com/G2B2JBfHrVD5z4o0i3It6HS1q73vcq5G7lwlSZbTh74NEVK0XtpjKg49_8rXSw4OSKPnXdX9QkUdnkMuYuN_q5Ov_sM2O0P8voOJaw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/G2B2JBfHrVD5z4o0i3It6HS1q73vcq5G7lwlSZbTh74NEVK0XtpjKg49_8rXSw4OSKPnXdX9QkUdnkMuYuN_q5Ov_sM2O0P8voOJaw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/G2B2JBfHrVD5z4o0i3It6HS1q73vcq5G7lwlSZbTh74NEVK0XtpjKg49_8rXSw4OSKPnXdX9QkUdnkMuYuN_q5Ov_sM2O0P8voOJaw=s250',
              animation_original_url: '',
            },
            {
              id: '21R0nPXR1nlqXP9UD8hn7CQUsUP',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Unsupervised — Machine Hallucinations — MoMA Dreams — F #14',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Feral File #009 - Unsupervised',
              creator_address: '0x1d05cf6c6beb0c869851bfdb9510d4e44e855ad6',
              creator_name: 'FeralFile',
              image_url:
                'https://lh3.googleusercontent.com/YBqC5uK6Z9bYYMHiq500o9AOhU_Ts_bSDNuvdZtTQbjcTqC19FnRmxt2B9jWJImZ-cRGrfw1bhK0Ha_3eulGidL1WqCqSEIeHI8FTQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/YBqC5uK6Z9bYYMHiq500o9AOhU_Ts_bSDNuvdZtTQbjcTqC19FnRmxt2B9jWJImZ-cRGrfw1bhK0Ha_3eulGidL1WqCqSEIeHI8FTQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/YBqC5uK6Z9bYYMHiq500o9AOhU_Ts_bSDNuvdZtTQbjcTqC19FnRmxt2B9jWJImZ-cRGrfw1bhK0Ha_3eulGidL1WqCqSEIeHI8FTQ=s250',
              animation_original_url: '',
            },
            {
              id: '21QsupBy7e2qNgDNQY5eMGwWESz',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Unsupervised — Machine Hallucinations — MoMA Dreams — B #29',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Feral File #009 - Unsupervised',
              creator_address: '0x1d05cf6c6beb0c869851bfdb9510d4e44e855ad6',
              creator_name: 'FeralFile',
              image_url:
                'https://lh3.googleusercontent.com/IAmnoGfrLwLEfK5Xkga_7EINinP9xTZlKUqvM6ZLfO4UA-24I6Qlfx4LHHptg7enbVyLk7tq0dcRxH_E88Rc_ryaiEpD-EVsnFaR',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/IAmnoGfrLwLEfK5Xkga_7EINinP9xTZlKUqvM6ZLfO4UA-24I6Qlfx4LHHptg7enbVyLk7tq0dcRxH_E88Rc_ryaiEpD-EVsnFaR=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/IAmnoGfrLwLEfK5Xkga_7EINinP9xTZlKUqvM6ZLfO4UA-24I6Qlfx4LHHptg7enbVyLk7tq0dcRxH_E88Rc_ryaiEpD-EVsnFaR=s250',
              animation_original_url: '',
            },
            {
              id: '21QsuntVKKRupl69HLg51U5rvUw',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Unsupervised — Machine Hallucinations — MoMA Dreams — G #28',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Feral File #009 - Unsupervised',
              creator_address: '0x1d05cf6c6beb0c869851bfdb9510d4e44e855ad6',
              creator_name: 'FeralFile',
              image_url:
                'https://lh3.googleusercontent.com/V8KQ1l5Y-I9pT2G4mVywR-uoJsRG6BkfwDK0R5r9u-2tWLzTMvQmOhyttzo3tNTxCL6Vu7-n6FSkkhXFEMXn7_XsMguX40gqJWq2kEs',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/V8KQ1l5Y-I9pT2G4mVywR-uoJsRG6BkfwDK0R5r9u-2tWLzTMvQmOhyttzo3tNTxCL6Vu7-n6FSkkhXFEMXn7_XsMguX40gqJWq2kEs=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/V8KQ1l5Y-I9pT2G4mVywR-uoJsRG6BkfwDK0R5r9u-2tWLzTMvQmOhyttzo3tNTxCL6Vu7-n6FSkkhXFEMXn7_XsMguX40gqJWq2kEs=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '21R15sZR8ZtZuVL68St9TNTRgHM',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 1 },
          name: '',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '21R0nQ1IyzU4MOmRb97l4dzi80R',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Unsupervised — Data Universe — MoMA #3222',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Feral File #009 - Unsupervised',
              creator_address: '0x1d05cf6c6beb0c869851bfdb9510d4e44e855ad6',
              creator_name: 'FeralFile',
              image_url:
                'https://lh3.googleusercontent.com/Y1xkMbnavGmRwqTCRChIepPD-A35ClNgBift8_ZrZMwk66u6bdPiW_mz0YRQjnF80w8RWmWw4pR86WQwZSLDyn-VeBUbjZPoK6jx',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/Y1xkMbnavGmRwqTCRChIepPD-A35ClNgBift8_ZrZMwk66u6bdPiW_mz0YRQjnF80w8RWmWw4pR86WQwZSLDyn-VeBUbjZPoK6jx=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/Y1xkMbnavGmRwqTCRChIepPD-A35ClNgBift8_ZrZMwk66u6bdPiW_mz0YRQjnF80w8RWmWw4pR86WQwZSLDyn-VeBUbjZPoK6jx=s250',
              animation_original_url:
                'https://cdn.feralfileassets.com/previews/e601569d-5611-4a82-93ba-a7f55b260001/1637053763/preview.mp4',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '20qyioE29qCg2iG2sBETqI8rAjg',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 2 },
          name: 'bauhaus blocks',
          collectors_note:
            'Bauhaus was an early 19th-century art movement, which synthesized craft, technology, and aesthetics. Seeking the creation of a \u0026#34;total work.\u0026#34; Or a that is, multiple works that act as one through aesthetic unity. An idea that lends itself to simple geometric shapes cascading with cohesion.',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '20qyZkO1rJgw3BLrbfERBPQFjJf',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #7959',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/XWdctJcH8Qt9sgN6VFJBToJYfc1437EHPnJL1HmadkhmPFHZAeGj6MBj0IkZS_GbJ8o9vFT5a1YOEDi_6xKL3p3mdAr5Fte-iVQlDQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/XWdctJcH8Qt9sgN6VFJBToJYfc1437EHPnJL1HmadkhmPFHZAeGj6MBj0IkZS_GbJ8o9vFT5a1YOEDi_6xKL3p3mdAr5Fte-iVQlDQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/XWdctJcH8Qt9sgN6VFJBToJYfc1437EHPnJL1HmadkhmPFHZAeGj6MBj0IkZS_GbJ8o9vFT5a1YOEDi_6xKL3p3mdAr5Fte-iVQlDQ=s250',
              animation_original_url: '',
            },
            {
              id: '20qyZi1GIxi0u1TukrBHWOoeeYY',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #3810',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/7k_Gf3zig4u0P4q5xEKSHSrCxYCk5LkiVYmvKQxKTtLxz52boThiQr9YZM-M7hYFCJLdcXF1OFOetKaXjUWfwhFVdccDurla7g1ykWo',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/7k_Gf3zig4u0P4q5xEKSHSrCxYCk5LkiVYmvKQxKTtLxz52boThiQr9YZM-M7hYFCJLdcXF1OFOetKaXjUWfwhFVdccDurla7g1ykWo=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/7k_Gf3zig4u0P4q5xEKSHSrCxYCk5LkiVYmvKQxKTtLxz52boThiQr9YZM-M7hYFCJLdcXF1OFOetKaXjUWfwhFVdccDurla7g1ykWo=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '20qyz0jgd6GLkf7VtYjGsOkchpF',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 2 },
          name: '',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '20qyZgoL9pQicBrlpU4sE14YyjV',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #0615',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/fldVJXD44e2yPNeg_aAYgwI9a6OQFMqyHOCYrNgCsLLiESGdlI-pYwk2ZX15PdJR4PxhV-q30PxE37TvRVFppUZaaZuDsaE9ZOvAUw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/fldVJXD44e2yPNeg_aAYgwI9a6OQFMqyHOCYrNgCsLLiESGdlI-pYwk2ZX15PdJR4PxhV-q30PxE37TvRVFppUZaaZuDsaE9ZOvAUw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/fldVJXD44e2yPNeg_aAYgwI9a6OQFMqyHOCYrNgCsLLiESGdlI-pYwk2ZX15PdJR4PxhV-q30PxE37TvRVFppUZaaZuDsaE9ZOvAUw=s250',
              animation_original_url: '',
            },
            {
              id: '20qyZgOfLybqabsVIForFyUAmWK',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #1177',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/cr8WYNpP5HPVfcllhnpbeY9vBTeQD5GtiBYuvjN6B5RKZkQXSW1vjn23b2rw2z7wB2M_x_L_wYkkOL4oPBqkAEmqzG6-K6B0Vr4tAQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/cr8WYNpP5HPVfcllhnpbeY9vBTeQD5GtiBYuvjN6B5RKZkQXSW1vjn23b2rw2z7wB2M_x_L_wYkkOL4oPBqkAEmqzG6-K6B0Vr4tAQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/cr8WYNpP5HPVfcllhnpbeY9vBTeQD5GtiBYuvjN6B5RKZkQXSW1vjn23b2rw2z7wB2M_x_L_wYkkOL4oPBqkAEmqzG6-K6B0Vr4tAQ=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '20qynDqailFfmP5VlVHhB2AYrAN',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 3 },
          name: '',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '20qyZnIntgi7oqCQYhrSYxsnq59',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #5155',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/tAPNxbIGa-uYrSfCsq2k_XnsEmOeSetukkG7v0lCOT_S2krqkX1j0FDkfULeJdDaXd-QA1rwcDXf0DLZXe-Xx2xp2sA7vOT_pPouIw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/tAPNxbIGa-uYrSfCsq2k_XnsEmOeSetukkG7v0lCOT_S2krqkX1j0FDkfULeJdDaXd-QA1rwcDXf0DLZXe-Xx2xp2sA7vOT_pPouIw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/tAPNxbIGa-uYrSfCsq2k_XnsEmOeSetukkG7v0lCOT_S2krqkX1j0FDkfULeJdDaXd-QA1rwcDXf0DLZXe-Xx2xp2sA7vOT_pPouIw=s250',
              animation_original_url: '',
            },
            {
              id: '20qyZkjvBh3fxYyY1zryrvKH4pC',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #0529',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/OWXBjRPojgbDWgEWzAdVSGHef0TJ90wL_hVvA6TbzEWi_NhN4IL1LR_K0zH1hbsigDxy-uOUBn2FblvUsPK8LEnLC4cdedYSY96n',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/OWXBjRPojgbDWgEWzAdVSGHef0TJ90wL_hVvA6TbzEWi_NhN4IL1LR_K0zH1hbsigDxy-uOUBn2FblvUsPK8LEnLC4cdedYSY96n=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/OWXBjRPojgbDWgEWzAdVSGHef0TJ90wL_hVvA6TbzEWi_NhN4IL1LR_K0zH1hbsigDxy-uOUBn2FblvUsPK8LEnLC4cdedYSY96n=s250',
              animation_original_url: '',
            },
            {
              id: '20qyZjglkznFl4Yt3qWJyzQThIv',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #7901',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/yuaWDhw55jpz74Civh25hUY-1Rf5gTkjOc_2Vbiw4r9CBQLjMDFBceV1w0WniGR06U1eaIzFH_TF8xfLPB11srN2YkIYSKzgi_alMQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/yuaWDhw55jpz74Civh25hUY-1Rf5gTkjOc_2Vbiw4r9CBQLjMDFBceV1w0WniGR06U1eaIzFH_TF8xfLPB11srN2YkIYSKzgi_alMQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/yuaWDhw55jpz74Civh25hUY-1Rf5gTkjOc_2Vbiw4r9CBQLjMDFBceV1w0WniGR06U1eaIzFH_TF8xfLPB11srN2YkIYSKzgi_alMQ=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '20qz0cy6E2SN8aMaLuSxRxCWgyO',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 2 },
          name: '',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '20qyZlpSZtEscQWeDR8XUtqshXX',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #1050',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/mIrH8h01MQ8indZknjbK4Ck_QNRNAg0uhvRq1vLNwo1q_CmK-ZPk5eBT8whaGGpkgKbANl3oDk0JTe5e4mxMIZYky-KR1aZGYKA7mg',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/mIrH8h01MQ8indZknjbK4Ck_QNRNAg0uhvRq1vLNwo1q_CmK-ZPk5eBT8whaGGpkgKbANl3oDk0JTe5e4mxMIZYky-KR1aZGYKA7mg=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/mIrH8h01MQ8indZknjbK4Ck_QNRNAg0uhvRq1vLNwo1q_CmK-ZPk5eBT8whaGGpkgKbANl3oDk0JTe5e4mxMIZYky-KR1aZGYKA7mg=s250',
              animation_original_url: '',
            },
            {
              id: '20qyZhAEUXXWn44zhX5Kjrz2w89',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Bauhaus Block #6390',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Bauhaus Blocks',
              creator_address: '0xf8254f25e037b6c1db7d1c8692335e682dfe163a',
              creator_name: 'Art101NFT',
              image_url:
                'https://lh3.googleusercontent.com/Ew84bkBLyY7TpqoinoG4baVo-ERGqHfGkkh2M0gmL6jXy9gGB0uagEud5rTz4L0zRuk07QAGI2dw9PbbgifntYWPNCE0S-V6tDD1mA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/Ew84bkBLyY7TpqoinoG4baVo-ERGqHfGkkh2M0gmL6jXy9gGB0uagEud5rTz4L0zRuk07QAGI2dw9PbbgifntYWPNCE0S-V6tDD1mA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/Ew84bkBLyY7TpqoinoG4baVo-ERGqHfGkkh2M0gmL6jXy9gGB0uagEud5rTz4L0zRuk07QAGI2dw9PbbgifntYWPNCE0S-V6tDD1mA=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '1zFgGMcguKc19ov24sEYHFIikhX',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 1 },
          name: ' ',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvDWYOrn9A42n83ezne4QjYF',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Chromie Squiggle #2728',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Chromie Squiggle by Snowfro',
              creator_address: '0xb998a2520907ed1fc0f9f457b2219fb2720466cd',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/vOGaztasppUS4E41kC3sOTm07PUUdm8oSr43Nk2sjrOpJWPq8fQCH4auHtTO69mxGxERWgmKNhHDIA2xS4ssMKwn0w',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/vOGaztasppUS4E41kC3sOTm07PUUdm8oSr43Nk2sjrOpJWPq8fQCH4auHtTO69mxGxERWgmKNhHDIA2xS4ssMKwn0w=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/vOGaztasppUS4E41kC3sOTm07PUUdm8oSr43Nk2sjrOpJWPq8fQCH4auHtTO69mxGxERWgmKNhHDIA2xS4ssMKwn0w=s250',
              animation_original_url: 'https://generator.artblocks.io/2728',
            },
            {
              id: '20uplQQ22XNM2QTjWDWF3HivIfH',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Rose Distortion special #01',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flower Distortion',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/zw_Or5J96KI9KvBrgPk3mwSWANSp0gu4pReBgVZ-wyu4_WfM7Ic-LB_0pbpgYOMg3BcyvEb2K6mfBY4xG3BQGEOiJIRlTiw0UTk6mQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/zw_Or5J96KI9KvBrgPk3mwSWANSp0gu4pReBgVZ-wyu4_WfM7Ic-LB_0pbpgYOMg3BcyvEb2K6mfBY4xG3BQGEOiJIRlTiw0UTk6mQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/zw_Or5J96KI9KvBrgPk3mwSWANSp0gu4pReBgVZ-wyu4_WfM7Ic-LB_0pbpgYOMg3BcyvEb2K6mfBY4xG3BQGEOiJIRlTiw0UTk6mQ=s250',
              animation_original_url:
                'https://storage.opensea.io/files/e71290ad63a4322b340b8dc4aceea524.mp4',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '1ywK6gQhNEMiS6zVamDK44GJXuU',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 0 },
          name: 'the garden 🌸',
          collectors_note: 'a bouquet for my fiancé\u0026#39;s 27th birthday',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvHA8Y3iwqq9lzorrHIhw3GU',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #2078',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/D_ArF3yaI5L7kqVgvlb3johwMV2F-X448-Fd4M4kyoWAAbR9KMAD207k7PxcDTXDa0G0-yu1nL_cDFv6-er2Io_nAV649NlqggAbdOQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/D_ArF3yaI5L7kqVgvlb3johwMV2F-X448-Fd4M4kyoWAAbR9KMAD207k7PxcDTXDa0G0-yu1nL_cDFv6-er2Io_nAV649NlqggAbdOQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/D_ArF3yaI5L7kqVgvlb3johwMV2F-X448-Fd4M4kyoWAAbR9KMAD207k7PxcDTXDa0G0-yu1nL_cDFv6-er2Io_nAV649NlqggAbdOQ=s250',
              animation_original_url: 'https://generator.artblocks.io/116002078',
            },
            {
              id: '1zsXvFcaBlE0ErQcABKzakmhTWo',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #5569',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/fLhaK7pu9C_dkD2fMZzztSlGTmSfEYLHaSotceiW9WcXzYvPrd9cn1vV2i30MvLstZ_6z60-rzAh4WaPQmqKc9iA4wklFqnZ6lP5RA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/fLhaK7pu9C_dkD2fMZzztSlGTmSfEYLHaSotceiW9WcXzYvPrd9cn1vV2i30MvLstZ_6z60-rzAh4WaPQmqKc9iA4wklFqnZ6lP5RA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/fLhaK7pu9C_dkD2fMZzztSlGTmSfEYLHaSotceiW9WcXzYvPrd9cn1vV2i30MvLstZ_6z60-rzAh4WaPQmqKc9iA4wklFqnZ6lP5RA=s250',
              animation_original_url: 'https://generator.artblocks.io/116005569',
            },
            {
              id: '1zsXvENE3vuwucykn2PWsiBjLKE',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #2217',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/E6qe9btA-ccrO3PydPf8nezZArfUwo3Rou4IsLHZdLhwMXMk892zMbSPwCPTSMcz4VK5L4-8RRO6loCr_8FxotZ9erejBJZ31AyNcw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/E6qe9btA-ccrO3PydPf8nezZArfUwo3Rou4IsLHZdLhwMXMk892zMbSPwCPTSMcz4VK5L4-8RRO6loCr_8FxotZ9erejBJZ31AyNcw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/E6qe9btA-ccrO3PydPf8nezZArfUwo3Rou4IsLHZdLhwMXMk892zMbSPwCPTSMcz4VK5L4-8RRO6loCr_8FxotZ9erejBJZ31AyNcw=s250',
              animation_original_url: 'https://generator.artblocks.io/116002217',
            },
            {
              id: '1zsXvDBjyzTjmOHeRJRduloxHQv',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #3886',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/1eGIU1O5foi1pjGCzfnC6oUa2VIy9dw0UKUUvSrY1WCAH70XqTqNfAcbvwwMNA0tjucr1Vl3sVJsYyCH9lvfbGhPhYWd9K9EUiJkf9k',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/1eGIU1O5foi1pjGCzfnC6oUa2VIy9dw0UKUUvSrY1WCAH70XqTqNfAcbvwwMNA0tjucr1Vl3sVJsYyCH9lvfbGhPhYWd9K9EUiJkf9k=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/1eGIU1O5foi1pjGCzfnC6oUa2VIy9dw0UKUUvSrY1WCAH70XqTqNfAcbvwwMNA0tjucr1Vl3sVJsYyCH9lvfbGhPhYWd9K9EUiJkf9k=s250',
              animation_original_url: 'https://generator.artblocks.io/116003886',
            },
            {
              id: '1zsXvCbtnRl34OO0dgr7oEaI3ZZ',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #4678',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/k9XGkmb40DmDX9om-iqwahI5JmdtCvFJt-dRBG3oG_M85fKKncj8UeEc0RIvun5PaCYQ3Le37UfCTpildxXb9uiQ38djWwusUCNZmiI',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/k9XGkmb40DmDX9om-iqwahI5JmdtCvFJt-dRBG3oG_M85fKKncj8UeEc0RIvun5PaCYQ3Le37UfCTpildxXb9uiQ38djWwusUCNZmiI=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/k9XGkmb40DmDX9om-iqwahI5JmdtCvFJt-dRBG3oG_M85fKKncj8UeEc0RIvun5PaCYQ3Le37UfCTpildxXb9uiQ38djWwusUCNZmiI=s250',
              animation_original_url: 'https://generator.artblocks.io/116004678',
            },
            {
              id: '1zsXvG02KZHphDkNrpyjXm3gHdB',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #4976',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/f1xgMhkX2h7QzEzaTi_01YCTAsG93_k0JUTInfXMxXPKrYvU9g4Ifq4qD5b31jlIxf_AZEbslV-mDcTJsfBZ7xMHLtfB_KICmvUO',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/f1xgMhkX2h7QzEzaTi_01YCTAsG93_k0JUTInfXMxXPKrYvU9g4Ifq4qD5b31jlIxf_AZEbslV-mDcTJsfBZ7xMHLtfB_KICmvUO=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/f1xgMhkX2h7QzEzaTi_01YCTAsG93_k0JUTInfXMxXPKrYvU9g4Ifq4qD5b31jlIxf_AZEbslV-mDcTJsfBZ7xMHLtfB_KICmvUO=s250',
              animation_original_url: 'https://generator.artblocks.io/116004976',
            },
            {
              id: '1zsXvCFDDxXTorZvwnEEgmLeuCb',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Purple Cutter Flower Distortion #11',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flower Distortion',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/VIcesasyH5p2Q84tAPAUedcdXbI8xIHxAXqJ8rmoFcJmpe3XXv9tvGkBFru2SnRYkKwFO_K6pCErv3jZAJiIs-toXRC19uOD6YkIQw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/VIcesasyH5p2Q84tAPAUedcdXbI8xIHxAXqJ8rmoFcJmpe3XXv9tvGkBFru2SnRYkKwFO_K6pCErv3jZAJiIs-toXRC19uOD6YkIQw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/VIcesasyH5p2Q84tAPAUedcdXbI8xIHxAXqJ8rmoFcJmpe3XXv9tvGkBFru2SnRYkKwFO_K6pCErv3jZAJiIs-toXRC19uOD6YkIQw=s250',
              animation_original_url:
                'https://storage.opensea.io/files/fc64544dc4eddd3a77e46594ad1b3974.mp4',
            },
            {
              id: '1zsXvF6PMVkuw9XuEEbTsV0M0UM',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Hibiscus distortion #9',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flower Distortion',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/Pelg1seVSB3SnZRtC6nq2B35KcD7VjG2xqXFgSHJe7yTFjAANEkG8F76JusKNMT0U-DkKMyg1p9nu4_PNF5iAY87B2fpToXhKBTtpw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/Pelg1seVSB3SnZRtC6nq2B35KcD7VjG2xqXFgSHJe7yTFjAANEkG8F76JusKNMT0U-DkKMyg1p9nu4_PNF5iAY87B2fpToXhKBTtpw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/Pelg1seVSB3SnZRtC6nq2B35KcD7VjG2xqXFgSHJe7yTFjAANEkG8F76JusKNMT0U-DkKMyg1p9nu4_PNF5iAY87B2fpToXhKBTtpw=s250',
              animation_original_url:
                'https://storage.opensea.io/files/158be6165a6dabf38c5aae01186154f2.mp4',
            },
            {
              id: '1zsXvHbwdEWaAr1Y0iCO1Y6sdyJ',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Acacia Pycnantha distortion #8',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flower Distortion',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/vnx6BYLdvI6Ng60JtQo-dRNtyEqj6miS56ROPEVcQjvwQgqs5Qidbh_QFCsFH1FbqRco9vg78velzZwXIC-UZFy9y_fXcgpND74V',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/vnx6BYLdvI6Ng60JtQo-dRNtyEqj6miS56ROPEVcQjvwQgqs5Qidbh_QFCsFH1FbqRco9vg78velzZwXIC-UZFy9y_fXcgpND74V=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/vnx6BYLdvI6Ng60JtQo-dRNtyEqj6miS56ROPEVcQjvwQgqs5Qidbh_QFCsFH1FbqRco9vg78velzZwXIC-UZFy9y_fXcgpND74V=s250',
              animation_original_url:
                'https://storage.opensea.io/files/533c255f3b9ad8ce3a72189d5daa5254.mp4',
            },
            {
              id: '1zsXvJIJGg9CsgyfsXc47FQBClG',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'white rose distortion #7',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flower Distortion',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/GQG4amtYnw8LlplATXy5OJ4ZbEUe5HijbGwXtzn6R4LpzhULiSQKZhsv1-2GD__WNE4ryajJM5yaYBgkZpKKUoBD8ZXENSoQNGOxRg',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/GQG4amtYnw8LlplATXy5OJ4ZbEUe5HijbGwXtzn6R4LpzhULiSQKZhsv1-2GD__WNE4ryajJM5yaYBgkZpKKUoBD8ZXENSoQNGOxRg=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/GQG4amtYnw8LlplATXy5OJ4ZbEUe5HijbGwXtzn6R4LpzhULiSQKZhsv1-2GD__WNE4ryajJM5yaYBgkZpKKUoBD8ZXENSoQNGOxRg=s250',
              animation_original_url:
                'https://storage.opensea.io/files/39f63573eedf62fa082ba9d25d7ac19b.mp4',
            },
            {
              id: '1zsXvE4KGEnQNnll7uQC3T31DJ5',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Rose  Distortion #10',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flower Distortion',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/9OT9PJJY3bNnjr8LyGI8XPjLpyrQv4DB0kdaiR9LDmtpI00PVVgBVCh7jBVrhdCnMpO5ayuEANPVwTLAgZ2Duc7hNNKvVCdfTaMIOoE',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/9OT9PJJY3bNnjr8LyGI8XPjLpyrQv4DB0kdaiR9LDmtpI00PVVgBVCh7jBVrhdCnMpO5ayuEANPVwTLAgZ2Duc7hNNKvVCdfTaMIOoE=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/9OT9PJJY3bNnjr8LyGI8XPjLpyrQv4DB0kdaiR9LDmtpI00PVVgBVCh7jBVrhdCnMpO5ayuEANPVwTLAgZ2Duc7hNNKvVCdfTaMIOoE=s250',
              animation_original_url:
                'https://storage.opensea.io/files/92a452b1f16718a5a7de85b247f77655.mp4',
            },
            {
              id: '1zsXvH0Z3rgNs1WsN8JruJojn3z',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Singapore daisy Distortion #12',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flower Distortion',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/HdJlhQ-U4dgPAWelSWNjufMP5ZL4O46S32T7g-E4PiCyqzjvLiMRya9E5SyeqfS3nMHt50A3jZet_oRJWJlHl8p9m0gXd6fe0yyDcw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/HdJlhQ-U4dgPAWelSWNjufMP5ZL4O46S32T7g-E4PiCyqzjvLiMRya9E5SyeqfS3nMHt50A3jZet_oRJWJlHl8p9m0gXd6fe0yyDcw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/HdJlhQ-U4dgPAWelSWNjufMP5ZL4O46S32T7g-E4PiCyqzjvLiMRya9E5SyeqfS3nMHt50A3jZet_oRJWJlHl8p9m0gXd6fe0yyDcw=s250',
              animation_original_url:
                'https://storage.opensea.io/files/53409bab5b496aecbbc6b414227696d0.mp4',
            },
            {
              id: '1zsXvEnFruIjtVEZbXRcVV96yx4',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #2456',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/C6Ow5kIHdjaKhD1CutIfoarxrXtFTO69PNiHlZ7L7dzxHlt1XM0wepMVXY7J8-d52dMaQX5HCZ9vTWG6Kd4DUHzCAAIpnrZKogqm5g',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/C6Ow5kIHdjaKhD1CutIfoarxrXtFTO69PNiHlZ7L7dzxHlt1XM0wepMVXY7J8-d52dMaQX5HCZ9vTWG6Kd4DUHzCAAIpnrZKogqm5g=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/C6Ow5kIHdjaKhD1CutIfoarxrXtFTO69PNiHlZ7L7dzxHlt1XM0wepMVXY7J8-d52dMaQX5HCZ9vTWG6Kd4DUHzCAAIpnrZKogqm5g=s250',
              animation_original_url: 'https://generator.artblocks.io/116002456',
            },
            {
              id: '1zsXvGOivjEWisKowYFfHkFuvb6',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #3184',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/OwI_oeUFRtjl2cVpVDsqsHuUoEQSBaZBD1JIT-wneSlLVbap6rV7RMxf9iRD-PSUb5PbRpUOq0OJNPEOwc-JR2Z66SdO3M_FyzAI',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/OwI_oeUFRtjl2cVpVDsqsHuUoEQSBaZBD1JIT-wneSlLVbap6rV7RMxf9iRD-PSUb5PbRpUOq0OJNPEOwc-JR2Z66SdO3M_FyzAI=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/OwI_oeUFRtjl2cVpVDsqsHuUoEQSBaZBD1JIT-wneSlLVbap6rV7RMxf9iRD-PSUb5PbRpUOq0OJNPEOwc-JR2Z66SdO3M_FyzAI=s250',
              animation_original_url: 'https://generator.artblocks.io/116003184',
            },
            {
              id: '1zsXvIzlahdFFd3a38c6OyUvudT',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #3000',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/17cwnQYjbKCa-ybpgf6fvS3t8fseMCWZdZB0KafYSmZ1Q9Ik9hYQAb35h_LCpldaVjYY-qIJ8zmrbL6WX1nLvxxMaQaY1EAGay9oMQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/17cwnQYjbKCa-ybpgf6fvS3t8fseMCWZdZB0KafYSmZ1Q9Ik9hYQAb35h_LCpldaVjYY-qIJ8zmrbL6WX1nLvxxMaQaY1EAGay9oMQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/17cwnQYjbKCa-ybpgf6fvS3t8fseMCWZdZB0KafYSmZ1Q9Ik9hYQAb35h_LCpldaVjYY-qIJ8zmrbL6WX1nLvxxMaQaY1EAGay9oMQ=s250',
              animation_original_url: 'https://generator.artblocks.io/116003000',
            },
            {
              id: '1zsXvHkuwsuFMMswJQqxr6Ml6AE',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #3877',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/75xdF2TTa7f5jauDoB6orQy3-3eW5LWQZi6pfqqoGc7GhE770d1yBpvWO08M2Xw-8ZL52Vsnlo_zBpOymhxrdvW_F-PUEUCiy8PGfg',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/75xdF2TTa7f5jauDoB6orQy3-3eW5LWQZi6pfqqoGc7GhE770d1yBpvWO08M2Xw-8ZL52Vsnlo_zBpOymhxrdvW_F-PUEUCiy8PGfg=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/75xdF2TTa7f5jauDoB6orQy3-3eW5LWQZi6pfqqoGc7GhE770d1yBpvWO08M2Xw-8ZL52Vsnlo_zBpOymhxrdvW_F-PUEUCiy8PGfg=s250',
              animation_original_url: 'https://generator.artblocks.io/116003877',
            },
            {
              id: '1zsXvGtp3wj2uKMYgiinsj1zkAQ',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #4533',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/a6umbjXDFgUMZRvKZlr7spsppt-3JLMJR0S2XhPmHxJIN9k7N68nk7UCu20oXwksn5pyedX-ds_JffYOJOmacj89-P7iwD0JdLle',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/a6umbjXDFgUMZRvKZlr7spsppt-3JLMJR0S2XhPmHxJIN9k7N68nk7UCu20oXwksn5pyedX-ds_JffYOJOmacj89-P7iwD0JdLle=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/a6umbjXDFgUMZRvKZlr7spsppt-3JLMJR0S2XhPmHxJIN9k7N68nk7UCu20oXwksn5pyedX-ds_JffYOJOmacj89-P7iwD0JdLle=s250',
              animation_original_url: 'https://generator.artblocks.io/116004533',
            },
            {
              id: '1zsXvFjzvasectaf5SkpjRaVrfI',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Flowers #4933',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Flowers by RVig',
              creator_address: '0x44a1e2883f1e599664e511e6c1c7cc72d846f5fc',
              creator_name: 'rvig_art',
              image_url:
                'https://lh3.googleusercontent.com/AYVUjf4pXuhDcO6TiNJzWw-nUMSol_EZdAAy6KJHHwFhlk_FXABfnMGGvsihvq3LNZaC8gYFsUVQHO4kpJr6iID7n-hUZTUT_VjOWQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/AYVUjf4pXuhDcO6TiNJzWw-nUMSol_EZdAAy6KJHHwFhlk_FXABfnMGGvsihvq3LNZaC8gYFsUVQHO4kpJr6iID7n-hUZTUT_VjOWQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/AYVUjf4pXuhDcO6TiNJzWw-nUMSol_EZdAAy6KJHHwFhlk_FXABfnMGGvsihvq3LNZaC8gYFsUVQHO4kpJr6iID7n-hUZTUT_VjOWQ=s250',
              animation_original_url: 'https://generator.artblocks.io/116004933',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '1zD3xdnTZuvWmMRWbNzJ27sc9TV',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 6 },
          name: 'obituaries',
          collectors_note: 'RIP',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvFTM3NWvt0EFqOXiD2fbQ8X',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Obit #6240',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Obits Official',
              creator_address: '0xf85a742e9debf5715745c69210181e0c2dd5c9eb',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/2ZsLh3ddVqVh4lVXHh0q5I-RvcCrt80iQqmiLKPAwxI6dghBczkaS9SEgUiKLO-LO_ak1d6YmARbg8JyH0YK4CIq9mqtJnRkU2Eb5Q',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/2ZsLh3ddVqVh4lVXHh0q5I-RvcCrt80iQqmiLKPAwxI6dghBczkaS9SEgUiKLO-LO_ak1d6YmARbg8JyH0YK4CIq9mqtJnRkU2Eb5Q=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/2ZsLh3ddVqVh4lVXHh0q5I-RvcCrt80iQqmiLKPAwxI6dghBczkaS9SEgUiKLO-LO_ak1d6YmARbg8JyH0YK4CIq9mqtJnRkU2Eb5Q=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvGYENSaBmyZtGjbRT1sWMEB',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Obit #4148',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Obits Official',
              creator_address: '0xf85a742e9debf5715745c69210181e0c2dd5c9eb',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/k6zZMyYjzuq8JMY-N4XE02KOBcy5GVGx7URK4aV7G21lo6lCHq6TXNsrCvpONXyIDruVHNyPv0jPRqsAZuY48_uMbrpPY_0ZL2o6ZQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/k6zZMyYjzuq8JMY-N4XE02KOBcy5GVGx7URK4aV7G21lo6lCHq6TXNsrCvpONXyIDruVHNyPv0jPRqsAZuY48_uMbrpPY_0ZL2o6ZQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/k6zZMyYjzuq8JMY-N4XE02KOBcy5GVGx7URK4aV7G21lo6lCHq6TXNsrCvpONXyIDruVHNyPv0jPRqsAZuY48_uMbrpPY_0ZL2o6ZQ=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvIGnfqEZ5bNTTlKqkEJIFuq',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Obit #184',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Obits Official',
              creator_address: '0xf85a742e9debf5715745c69210181e0c2dd5c9eb',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/w8aMKO-2fssxE3_9oyLwbZuY9VJzJ-AS8RIdCso3tS6mCxQBCr7oQuZmS-LPVuje0yHJAcmZE_SLJl8bzMWWzAbIkdAEtmW2GMgdWA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/w8aMKO-2fssxE3_9oyLwbZuY9VJzJ-AS8RIdCso3tS6mCxQBCr7oQuZmS-LPVuje0yHJAcmZE_SLJl8bzMWWzAbIkdAEtmW2GMgdWA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/w8aMKO-2fssxE3_9oyLwbZuY9VJzJ-AS8RIdCso3tS6mCxQBCr7oQuZmS-LPVuje0yHJAcmZE_SLJl8bzMWWzAbIkdAEtmW2GMgdWA=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvE2baC6FiorbuH9TVeYBTm8',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Obit #3273',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Obits Official',
              creator_address: '0xf85a742e9debf5715745c69210181e0c2dd5c9eb',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/VT1TY-l1gyMwn8ueosFCfDEyP5XWKSkxTATUS8Xb46a4EORuYClI3NnYix-7Ulp5-tts-jvBT5m1CE1FfynXQexMhC9SPYRuMqR1UQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/VT1TY-l1gyMwn8ueosFCfDEyP5XWKSkxTATUS8Xb46a4EORuYClI3NnYix-7Ulp5-tts-jvBT5m1CE1FfynXQexMhC9SPYRuMqR1UQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/VT1TY-l1gyMwn8ueosFCfDEyP5XWKSkxTATUS8Xb46a4EORuYClI3NnYix-7Ulp5-tts-jvBT5m1CE1FfynXQexMhC9SPYRuMqR1UQ=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvGr1ITId1cfnUPIo6QQM5vI',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Obit #5057',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Obits Official',
              creator_address: '0xf85a742e9debf5715745c69210181e0c2dd5c9eb',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/QGfUqmPagnYCmbfDHXq6ux692N2Lpw6wWJhcrpw6ZfxLSeshkgENO7Re7YCVMUlUsAY6z-PMxvHTUoPYxFzl9_Q6xcQvbW4AIFjssg',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/QGfUqmPagnYCmbfDHXq6ux692N2Lpw6wWJhcrpw6ZfxLSeshkgENO7Re7YCVMUlUsAY6z-PMxvHTUoPYxFzl9_Q6xcQvbW4AIFjssg=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/QGfUqmPagnYCmbfDHXq6ux692N2Lpw6wWJhcrpw6ZfxLSeshkgENO7Re7YCVMUlUsAY6z-PMxvHTUoPYxFzl9_Q6xcQvbW4AIFjssg=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvJHqdleqEtvo91ShYwWqVDp',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Obit #3749',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Obits Official',
              creator_address: '0xf85a742e9debf5715745c69210181e0c2dd5c9eb',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/jIJNF58rd4Ynny0rq6l5jOkQAHmnh6YtdFseszSVuEbnyj7NrKTsiZnyKsFnXVW0mYX3GEvId5NBQNGRIMbNCt5bCMRpCWOdE_VRLw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/jIJNF58rd4Ynny0rq6l5jOkQAHmnh6YtdFseszSVuEbnyj7NrKTsiZnyKsFnXVW0mYX3GEvId5NBQNGRIMbNCt5bCMRpCWOdE_VRLw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/jIJNF58rd4Ynny0rq6l5jOkQAHmnh6YtdFseszSVuEbnyj7NrKTsiZnyKsFnXVW0mYX3GEvId5NBQNGRIMbNCt5bCMRpCWOdE_VRLw=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '1zXshehsd55QnShq11yIjfqfFi2',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 0 },
          name: 'fluidity',
          collectors_note: 'by artist [@offen_der](https://twitter.com/Offen_Der)',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvIYCMBarraBDUnCZCCAk5YK',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Crocodile EYE',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Foundation (FND)',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/pi3KoKi1a9yGUD5yaJ11wEIV5VmPdtXSGy59NorgFUIIgFlcGGeWm8fkeMM6wXr09do-ftdpRrn2IH0qG3DgjZ4Ifs8oBl4ym_sK5w',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/pi3KoKi1a9yGUD5yaJ11wEIV5VmPdtXSGy59NorgFUIIgFlcGGeWm8fkeMM6wXr09do-ftdpRrn2IH0qG3DgjZ4Ifs8oBl4ym_sK5w=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/pi3KoKi1a9yGUD5yaJ11wEIV5VmPdtXSGy59NorgFUIIgFlcGGeWm8fkeMM6wXr09do-ftdpRrn2IH0qG3DgjZ4Ifs8oBl4ym_sK5w=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmaF5Qp3Gop43YMvp4LFuBmu5o3cE3RGmZRBXDFxJ3fWCv/nft.mp4',
            },
            {
              id: '1zsXvGAuRzMb6bQk60E0tsQQF3D',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Hexagonal black hole',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Foundation (FND)',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/F5mEOATk-cp0zEfMw4_6qlzw2plmJPFDR9cyDUGhMFNQvNDIwyT-XQDUbZr0QMKmv59r8N223MTzqkHna6ToNTkrc0lmmM7tDfV3Hw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/F5mEOATk-cp0zEfMw4_6qlzw2plmJPFDR9cyDUGhMFNQvNDIwyT-XQDUbZr0QMKmv59r8N223MTzqkHna6ToNTkrc0lmmM7tDfV3Hw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/F5mEOATk-cp0zEfMw4_6qlzw2plmJPFDR9cyDUGhMFNQvNDIwyT-XQDUbZr0QMKmv59r8N223MTzqkHna6ToNTkrc0lmmM7tDfV3Hw=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmU8DWXoyhab79kc9Wag5a4Xz5tGVSoaUeDB3HFFf73NQR/nft.mp4',
            },
            {
              id: '1zsXvETgkVTq4Oxyiv1pt20ZJB5',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Watercourse',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Foundation (FND)',
              creator_address: '0x4b427f5b96e26defb6652e2ff942ffef6a566a06',
              creator_name: 'Offen_Der',
              image_url:
                'https://lh3.googleusercontent.com/quYEfbuGT-lOTvie0wh9Zs5ZHLYllj0YHqh3dIQA9vSMrhXhb8dg5MHtprJw3UbFNjxlkinv8G5OOMpdL44217B8Wj2BNgOjU94WrA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/quYEfbuGT-lOTvie0wh9Zs5ZHLYllj0YHqh3dIQA9vSMrhXhb8dg5MHtprJw3UbFNjxlkinv8G5OOMpdL44217B8Wj2BNgOjU94WrA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/quYEfbuGT-lOTvie0wh9Zs5ZHLYllj0YHqh3dIQA9vSMrhXhb8dg5MHtprJw3UbFNjxlkinv8G5OOMpdL44217B8Wj2BNgOjU94WrA=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmYGMV2tGgf1JxDrt95DVeE3RDzee8Fsb89YqdZ2RFsBW9/nft.mp4',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '1ywKPVQAUClM1CiA7SNRP9qOwJV',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 6 },
          name: 'particle stories',
          collectors_note: 'by artist [@DuncanRogoff](https://twitter.com/DuncanRogoff)',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvEB1HG2wIxbCcDjBmOTshZX',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Particle Story 007',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Particle Stories',
              creator_address: '0xf42bc1a36780275b0b410063546235b8b9b66321',
              creator_name: 'Duncan_Rogoff',
              image_url:
                'https://lh3.googleusercontent.com/50sMqjCpm8VOonU0sx-qNRAo79vrmvc9jM5O6BKRnZgbQc6SvfR7SrLTL_RSYz3_WBFbG1VPzYfLwkumw6OR9NuIHBStJQd-DkUi',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/50sMqjCpm8VOonU0sx-qNRAo79vrmvc9jM5O6BKRnZgbQc6SvfR7SrLTL_RSYz3_WBFbG1VPzYfLwkumw6OR9NuIHBStJQd-DkUi=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/50sMqjCpm8VOonU0sx-qNRAo79vrmvc9jM5O6BKRnZgbQc6SvfR7SrLTL_RSYz3_WBFbG1VPzYfLwkumw6OR9NuIHBStJQd-DkUi=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmZh5CLYZcwaw7W7MG6iw75evcr5qsz6q1tTVqcW7TwnDn/animation.mp4',
            },
            {
              id: '1zsXvHDj6zPbIJXf1wIa8iOGTvm',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Particle Story 006',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Particle Stories',
              creator_address: '0xf42bc1a36780275b0b410063546235b8b9b66321',
              creator_name: 'Duncan_Rogoff',
              image_url:
                'https://lh3.googleusercontent.com/_-DDlf278Qly2XDtTkre7o_A68SYng6gg9tyPRXu2NSfpKnlW8ulK5j3Ap6U637hF7uSjpBtfbNsCzZIkpXf0LP4ED6VPDrZy7FX1Qc',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/_-DDlf278Qly2XDtTkre7o_A68SYng6gg9tyPRXu2NSfpKnlW8ulK5j3Ap6U637hF7uSjpBtfbNsCzZIkpXf0LP4ED6VPDrZy7FX1Qc=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/_-DDlf278Qly2XDtTkre7o_A68SYng6gg9tyPRXu2NSfpKnlW8ulK5j3Ap6U637hF7uSjpBtfbNsCzZIkpXf0LP4ED6VPDrZy7FX1Qc=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmPuQgLJqTvkzFMkdrAdKra4t26mCYPq5VcTueMUf1cN4i/animation.mp4',
            },
            {
              id: '1zsXvGQvA8tBm5596RM8cLzaWUo',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Particle Story 001',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Particle Stories',
              creator_address: '0xf42bc1a36780275b0b410063546235b8b9b66321',
              creator_name: 'Duncan_Rogoff',
              image_url:
                'https://lh3.googleusercontent.com/iCwhH1dter41zRum1JiP6CjXQLc92NHPwKuTRBhAlYTFMzyTj3Xc6VVqaIglNWjAyqfIItMUr71VMQ1aUQI608I5lxiFeuaoNBLTvA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/iCwhH1dter41zRum1JiP6CjXQLc92NHPwKuTRBhAlYTFMzyTj3Xc6VVqaIglNWjAyqfIItMUr71VMQ1aUQI608I5lxiFeuaoNBLTvA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/iCwhH1dter41zRum1JiP6CjXQLc92NHPwKuTRBhAlYTFMzyTj3Xc6VVqaIglNWjAyqfIItMUr71VMQ1aUQI608I5lxiFeuaoNBLTvA=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmS3wkPP2RjDKgvpRCK9kX6QFdqToLkbDnEZoTxefVghCq/animation.mp4',
            },
            {
              id: '1zsXvFpo5TgjWIuCMqXJD4O6BoG',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Particle Story 003',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Particle Stories',
              creator_address: '0xf42bc1a36780275b0b410063546235b8b9b66321',
              creator_name: 'Duncan_Rogoff',
              image_url:
                'https://lh3.googleusercontent.com/-v5-kf_SVdCZz1atzW0vn97XBJEa6buVUdkc6T-QoGrxHzWUmSDRTB_U37pw6obdA57uZIfdZkMa_-OqmOSy7zoXUVuOh-AsBwWenw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/-v5-kf_SVdCZz1atzW0vn97XBJEa6buVUdkc6T-QoGrxHzWUmSDRTB_U37pw6obdA57uZIfdZkMa_-OqmOSy7zoXUVuOh-AsBwWenw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/-v5-kf_SVdCZz1atzW0vn97XBJEa6buVUdkc6T-QoGrxHzWUmSDRTB_U37pw6obdA57uZIfdZkMa_-OqmOSy7zoXUVuOh-AsBwWenw=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/Qmc9ZzHKx8i227FfuziD3UyeC5LmxwvDkq8Lfjbjf3tvGD/animation.mp4',
            },
            {
              id: '1zsXvGvwyoZO4WuqCj3pmbncBih',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Particle Story 009',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Particle Stories',
              creator_address: '0xf42bc1a36780275b0b410063546235b8b9b66321',
              creator_name: 'Duncan_Rogoff',
              image_url:
                'https://lh3.googleusercontent.com/XOW9aeFC7AgTMe36qiW4hSLqt2ZyrsbxcqkT-hGTv6AMRbY9ax8Jcx6lkxh_mndnglygmLyHq4eOaJqnKmvxd8yyyiiXTUCmdIgvqg',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/XOW9aeFC7AgTMe36qiW4hSLqt2ZyrsbxcqkT-hGTv6AMRbY9ax8Jcx6lkxh_mndnglygmLyHq4eOaJqnKmvxd8yyyiiXTUCmdIgvqg=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/XOW9aeFC7AgTMe36qiW4hSLqt2ZyrsbxcqkT-hGTv6AMRbY9ax8Jcx6lkxh_mndnglygmLyHq4eOaJqnKmvxd8yyyiiXTUCmdIgvqg=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmSZ1xw6XAZfRMxQ5KLxkryHsJp2Zkaa91qcco4ipPFSKj/animation.mp4',
            },
            {
              id: '1zsXvC2p2o57iYXHGFBTWspzm3d',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Particle Story 008',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Particle Stories',
              creator_address: '0xf42bc1a36780275b0b410063546235b8b9b66321',
              creator_name: 'Duncan_Rogoff',
              image_url:
                'https://lh3.googleusercontent.com/4QslqrqsKZ9l2QLB_QymZOSraXXm9WP94dWHWlgoeX188Vi0RL9DMC3zp8bGBJixBPY54yRVZtn9BAvsRbv1kuv85ZuB_743Ebke',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/4QslqrqsKZ9l2QLB_QymZOSraXXm9WP94dWHWlgoeX188Vi0RL9DMC3zp8bGBJixBPY54yRVZtn9BAvsRbv1kuv85ZuB_743Ebke=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/4QslqrqsKZ9l2QLB_QymZOSraXXm9WP94dWHWlgoeX188Vi0RL9DMC3zp8bGBJixBPY54yRVZtn9BAvsRbv1kuv85ZuB_743Ebke=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmThtW7QFSM7U1sKfzSBmDQy1RwweYs8cGt8s9cSfjSDG9/animation.mp4',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '1ywKXKlHZm50VzviyrumKM8MZap',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 3 },
          name: 'shinies',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvC0BHKYSnXbvrF67DWvCLdL',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'FVCK_CRYSTAL// #3314',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'FVCK_CRYSTAL//',
              creator_address: '0xfded90a3b1348425577688866f798f94d77a0d02',
              creator_name: 'FVCKRENDER',
              image_url:
                'https://lh3.googleusercontent.com/wwF7TCrxFbjgKmUI4PHPdvGs4sdw3IgqbQ_Gm2Rp0RtSIOh2sN8rBu0K4HFJjsHyNV4xl0pKVumOSM7ztSd3In5yN_dDWB52mE92IQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/wwF7TCrxFbjgKmUI4PHPdvGs4sdw3IgqbQ_Gm2Rp0RtSIOh2sN8rBu0K4HFJjsHyNV4xl0pKVumOSM7ztSd3In5yN_dDWB52mE92IQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/wwF7TCrxFbjgKmUI4PHPdvGs4sdw3IgqbQ_Gm2Rp0RtSIOh2sN8rBu0K4HFJjsHyNV4xl0pKVumOSM7ztSd3In5yN_dDWB52mE92IQ=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvDYssSQQNmxOB7pqJjHUC4A',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'April 14 2021',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Coinbase Direct Public Offering',
              creator_address: '0x2ad9ea1e677949a536a270cec812d6e868c88108',
              creator_name: 'maxblaushild',
              image_url:
                'https://lh3.googleusercontent.com/8S2uhc_74_JijJwYnNOEQvlnHs6dI4lU86k8Zj2WcelVG9Gp4hx62UDzf2B_R4cTMdd_03SLOV_rFZFF8_5vwFSEz76OX61of4ZPaA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/8S2uhc_74_JijJwYnNOEQvlnHs6dI4lU86k8Zj2WcelVG9Gp4hx62UDzf2B_R4cTMdd_03SLOV_rFZFF8_5vwFSEz76OX61of4ZPaA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/8S2uhc_74_JijJwYnNOEQvlnHs6dI4lU86k8Zj2WcelVG9Gp4hx62UDzf2B_R4cTMdd_03SLOV_rFZFF8_5vwFSEz76OX61of4ZPaA=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvCCIx2Vtw0M33AJl4oWGXSf',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'FVCK_CRYSTAL// #232',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'FVCK_CRYSTAL//',
              creator_address: '0xfded90a3b1348425577688866f798f94d77a0d02',
              creator_name: 'FVCKRENDER',
              image_url:
                'https://lh3.googleusercontent.com/_2dlRgkodlT761r9kauxWUU9SHfvNid5hnTv2opRVhc13zrRgTuWtO1zzpkKYVLeo-MNOYadoLBh1H-rS0HEgEUCZQ7y3VMVljgVyQ',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/_2dlRgkodlT761r9kauxWUU9SHfvNid5hnTv2opRVhc13zrRgTuWtO1zzpkKYVLeo-MNOYadoLBh1H-rS0HEgEUCZQ7y3VMVljgVyQ=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/_2dlRgkodlT761r9kauxWUU9SHfvNid5hnTv2opRVhc13zrRgTuWtO1zzpkKYVLeo-MNOYadoLBh1H-rS0HEgEUCZQ7y3VMVljgVyQ=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '20zLV1CrAz0PVumgtdh0yTNptC5',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 3 },
          name: 'b a e',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '1zsXvDDNdSZ3xdMLSXWQRu8Kamj',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'A Study in Floral Hypercolor',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Madeon',
              creator_address: '0xa8a804aecdd1cc6eebd862bd98e9feca5d17bf5a',
              creator_name: '',
              image_url:
                'https://lh3.googleusercontent.com/E6a2D_VU6Ga8AZc95rpCL3mDJ1yefNJW1-RjQgV7Ig9J38Fw4q6PhjdLQF_Xx4CupRQ57BA_e4kmqmnUJD7TvfVMk8GKGbDecjRT',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/E6a2D_VU6Ga8AZc95rpCL3mDJ1yefNJW1-RjQgV7Ig9J38Fw4q6PhjdLQF_Xx4CupRQ57BA_e4kmqmnUJD7TvfVMk8GKGbDecjRT=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/E6a2D_VU6Ga8AZc95rpCL3mDJ1yefNJW1-RjQgV7Ig9J38Fw4q6PhjdLQF_Xx4CupRQ57BA_e4kmqmnUJD7TvfVMk8GKGbDecjRT=s250',
              animation_original_url:
                'https://res.cloudinary.com/nifty-gateway/video/upload/v1615521437/A/Madeon/Madeon_x_Mollie_Tarlow_-_A_Study_in_Floral_Hypercolor_gfvehh.mp4',
            },
            {
              id: '20KhUzkn7oSJZQQTVkTjPHq42Nz',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: '7 Years',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Rarible',
              creator_address: '0xdd33e6fd03983c970ae5e647df07314435d69f6b',
              creator_name: 'savethefuckingturtles',
              image_url:
                'https://lh3.googleusercontent.com/XYdclMFeBJli7AWbfeqoDyYNglwxIe3rJWeFGP-15Sr1verHvliCMceIiXgm44xB9MpdXlmdiSt797gcw-6wd-bpUMM3O3Ie_qEE',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/XYdclMFeBJli7AWbfeqoDyYNglwxIe3rJWeFGP-15Sr1verHvliCMceIiXgm44xB9MpdXlmdiSt797gcw-6wd-bpUMM3O3Ie_qEE=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/XYdclMFeBJli7AWbfeqoDyYNglwxIe3rJWeFGP-15Sr1verHvliCMceIiXgm44xB9MpdXlmdiSt797gcw-6wd-bpUMM3O3Ie_qEE=s250',
              animation_original_url: '',
            },
            {
              id: '1zsXvC97SsJXCLdPo2ABcpEEk8E',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'save the fucking turtles 001',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Rarible',
              creator_address: '0xdd33e6fd03983c970ae5e647df07314435d69f6b',
              creator_name: 'savethefuckingturtles',
              image_url:
                'https://lh3.googleusercontent.com/XVwbnDTYc1K337HNvb1UHL_Du-C1pECkcSwBLVTnpvjrOAT0SEFXbyFUlTY37bpBo7ZvrJWnI38m0CBCTUiBqxinOmugI2VSrdHy0aw',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/XVwbnDTYc1K337HNvb1UHL_Du-C1pECkcSwBLVTnpvjrOAT0SEFXbyFUlTY37bpBo7ZvrJWnI38m0CBCTUiBqxinOmugI2VSrdHy0aw=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/XVwbnDTYc1K337HNvb1UHL_Du-C1pECkcSwBLVTnpvjrOAT0SEFXbyFUlTY37bpBo7ZvrJWnI38m0CBCTUiBqxinOmugI2VSrdHy0aw=s250',
              animation_original_url: '',
            },
          ],
          hidden: false,
        },
        {
          version: 0,
          id: '20KhaDeKjOb2z9Cvgb5FMVbNZkg',
          created_at: '2022-01-13T20:19:56.388816Z',
          last_updated: '2022-01-13T20:19:56.388816Z',
          layout: { columns: 3 },
          name: '(🍸, 🍸)',
          collectors_note: '',
          owner_user_id: 'a3ff91986625382ff776067619200efe',
          nfts: [
            {
              id: '206Hmp7W6M2F3vCqBZmPa6Z8fbW',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Gold Card',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Gallery Premium Membership Cards',
              creator_address: '0x8914496dc01efcc49a2fa340331fb90969b6f1d2',
              creator_name: 'GalleryLabs',
              image_url:
                'https://lh3.googleusercontent.com/fyBYxufacKDzoFSvWEtuP0q_JP-P23FOmW51ElhhHc5kjLMNH--q6Wy3j48XasPK2-B4AMPGO3RoMipv3m2tBqqGAz_7jDf9hhau3Do',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/fyBYxufacKDzoFSvWEtuP0q_JP-P23FOmW51ElhhHc5kjLMNH--q6Wy3j48XasPK2-B4AMPGO3RoMipv3m2tBqqGAz_7jDf9hhau3Do=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/fyBYxufacKDzoFSvWEtuP0q_JP-P23FOmW51ElhhHc5kjLMNH--q6Wy3j48XasPK2-B4AMPGO3RoMipv3m2tBqqGAz_7jDf9hhau3Do=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/QmSnTH9G5V8HMJ23rVVcntL6j6TGHe5yiAcz9AqZEQnZJk',
            },
            {
              id: '21ch7DpGxNkfuCTd8MK1KxkV02G',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: false,
              name: 'Poolsuite - Executive Member 535/2500',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Poolsuite - Executive Member',
              creator_address: '0x3fd59e7fa8469d1e795684b2dce28faaf67a755b',
              creator_name: 'Poolsuite_Official',
              image_url:
                'https://lh3.googleusercontent.com/lhMnvlo5TQxWvRw8qMORrZjIjnr-XSUssLlasAZ0HWPv0mcHCCperdBpWZtwxG6mnzEro_TQRy5GQ38WIpUHpxdwaTtiYNuYpDxmUA',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/lhMnvlo5TQxWvRw8qMORrZjIjnr-XSUssLlasAZ0HWPv0mcHCCperdBpWZtwxG6mnzEro_TQRy5GQ38WIpUHpxdwaTtiYNuYpDxmUA=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/lhMnvlo5TQxWvRw8qMORrZjIjnr-XSUssLlasAZ0HWPv0mcHCCperdBpWZtwxG6mnzEro_TQRy5GQ38WIpUHpxdwaTtiYNuYpDxmUA=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/bafybeia5tevogbog7fyzsaobhc7oont6fgqry5nqdtqoq4dsyanqv4nhjy?id=535',
            },
            {
              id: '1zsXvCpNLG9clROKCObWyPMCAP2',
              created_at: '2022-01-13T20:11:12.211799Z',
              owner_address: '0x70d04384b5c3a466ec4d8cfb8213efc31c6a9d15',
              multiple_owners: true,
              name: 'Founding Member Card',
              asset_contract: { name: '', image_url: '' },
              token_collection_name: 'Gallery Premium Membership Cards',
              creator_address: '0x8914496dc01efcc49a2fa340331fb90969b6f1d2',
              creator_name: 'GalleryLabs',
              image_url:
                'https://lh3.googleusercontent.com/u0hIXstFpAgqplYn2LCjGzR6rw8J-fC8nSPME7gxTxBApdn15IU-jciAjUohbcircd-xw_n-BnsDmskVSI9MIjWA3-djRqZ_oIuk2xo',
              image_thumbnail_url:
                'https://lh3.googleusercontent.com/u0hIXstFpAgqplYn2LCjGzR6rw8J-fC8nSPME7gxTxBApdn15IU-jciAjUohbcircd-xw_n-BnsDmskVSI9MIjWA3-djRqZ_oIuk2xo=s128',
              image_preview_url:
                'https://lh3.googleusercontent.com/u0hIXstFpAgqplYn2LCjGzR6rw8J-fC8nSPME7gxTxBApdn15IU-jciAjUohbcircd-xw_n-BnsDmskVSI9MIjWA3-djRqZ_oIuk2xo=s250',
              animation_original_url:
                'https://ipfs.io/ipfs/Qmd3PAy8LEnLCVMztBn6XL8fkYd8s1mt8ggNax7kHYnUSQ',
            },
          ],
          hidden: false,
        },
      ],
    },
  ],
};

const fetchFunction: FetchFunction = (request, variables) => {
  console.log(request.text);
  return {
    data: {
      userByUsername: {
        id: 'some-user-id',
        __typename: 'GalleryUser',
        username: 'Robin',
        bio: 'Some bio here',
        gallery: {
          __typename: 'Gallery',
          collections: originalData.galleries[0].collections.map((collection) => ({
            id: collection.id,
            name: collection.name,
            collectorsNote: collection.collectors_note,
            hidden: collection.hidden,
            layout: collection.layout,
            nfts: collection.nfts.map((nft) => {
              return {
                __typename: 'GalleryNft',
                id: nft.id,
                nft: {
                  __typename: 'ImageNft',
                  id: `sub-${nft.id}`,
                  imageUrl: nft.image_url,
                },
                collection: {
                  id: collection.id,
                  layout: collection.layout,
                },
              };
            }),
          })),
        },
      },
    },
  };
};

export function RelayProvider({ children }: { children: ReactNode }) {
  const [relayEnvironment] = useState(
    () =>
      new RelayModernEnvironment({
        store: new Store(new RecordSource({})),
        network: Network.create(fetchFunction),
      })
  );

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>{children}</RelayEnvironmentProvider>
  );
}
