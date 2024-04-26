import clsx from 'clsx';
import React, { useCallback } from 'react';
import { GestureResponderEvent, View, ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';
import { graphql, useFragment } from 'react-relay';

import { useGalleryEditorActions } from '~/contexts/GalleryEditor/GalleryEditorContext';
import { StagedRow } from '~/contexts/GalleryEditor/types';
import { GalleryEditorRowFragment$key } from '~/generated/GalleryEditorRowFragment.graphql';

import { GalleryTouchableOpacity } from '../GalleryTouchableOpacity';
import { GalleryEditorActiveActions } from './GalleryEditorActiveActions';
import { GalleryEditorTokenPreview } from './GalleryEditorTokenPreview';
import { useWidthPerToken } from './useWidthPerToken';

type Props = {
  sectionId: string;
  row: StagedRow;
  style?: ViewProps['style'];
  queryRef: GalleryEditorRowFragment$key;
};

export function GalleryEditorRow({ sectionId, row, style, queryRef }: Props) {
  const query = useFragment(
    graphql`
      fragment GalleryEditorRowFragment on Query {
        ...GalleryEditorActiveActionsFragment
      }
    `,
    queryRef
  );

  const { activateRow, activeRowId } = useGalleryEditorActions();

  const widthPerToken = useWidthPerToken(row.columns);

  const handleSectionPress = useCallback(
    (e: GestureResponderEvent) => {
      e.stopPropagation();
      activateRow(sectionId, row.id);
    },
    [activateRow, sectionId, row.id]
  );

  return (
    <Animated.View className={clsx('border border-transparent gap-4')}>
      <GalleryTouchableOpacity
        eventElementId={null}
        eventName={null}
        eventContext={null}
        onPress={handleSectionPress}
        className={clsx('border border-transparent relative', {
          'border-activeBlue': activeRowId === row.id,
        })}
        style={style}
      >
        <View>
          <View className="flex-row flex-wrap gap-2">
            {row.items.map((item) => {
              if (item.kind === 'whitespace') {
                return <WhiteSpace key={item.id} size={widthPerToken - 8} />;
              } else {
                return (
                  <View
                    key={item.id}
                    className="aspect-square"
                    style={{
                      width: widthPerToken - 8,
                    }}
                  >
                    <GalleryEditorTokenPreview tokenRef={item.tokenRef} />
                  </View>
                );
              }
            })}
          </View>
          {activeRowId === row.id && <GalleryEditorActiveActions row={row} queryRef={query} />}
        </View>
      </GalleryTouchableOpacity>
    </Animated.View>
  );
}

type WhiteSpaceProps = {
  size: number;
  style?: ViewProps['style'];
};

function WhiteSpace({ size, style }: WhiteSpaceProps) {
  return <View style={[{ width: size, height: size }, style]} />;
}