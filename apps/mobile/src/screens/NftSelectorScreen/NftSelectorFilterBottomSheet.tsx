import { ForwardedRef } from 'react';
import { EthIcon } from 'src/icons/EthIcon';
import { PoapIcon } from 'src/icons/PoapIcon';
import { TezosIcon } from 'src/icons/TezosIcon';
import { WorldIcon } from 'src/icons/WorldIcon';

import { GalleryBottomSheetModalType } from '~/components/GalleryBottomSheet/GalleryBottomSheetModal';
import { SelectBottomSheet } from '~/components/Select';

type NftSelectorPickerFilterBottomSheetProps = {
  network: NetworkChoice;
  onNetworkChange(network: NetworkChoice): void;
  bottomSheetRef: ForwardedRef<GalleryBottomSheetModalType>;
};

export type NetworkChoice = 'all' | 'Ethereum' | 'Tezos' | 'POAP';

export function NftSelectorFilterBottomSheet({
  network,
  onNetworkChange,
  bottomSheetRef,
}: NftSelectorPickerFilterBottomSheetProps) {
  return (
    <SelectBottomSheet
      title="Filters"
      bottomSheetRef={bottomSheetRef}
      eventElementId="NftSelectorFilterBottomSheet Network Select"
      onChange={onNetworkChange}
      selected={network}
      options={[
        { label: 'All Networks', id: 'all', icon: <WorldIcon /> },
        { label: 'Ethereum', id: 'Ethereum', icon: <EthIcon /> },
        { label: 'Tezos', id: 'Tezos', icon: <TezosIcon /> },
        { label: 'POAP', id: 'POAP', icon: <PoapIcon className="w-4 h-4" /> },
      ]}
    />
  );
}