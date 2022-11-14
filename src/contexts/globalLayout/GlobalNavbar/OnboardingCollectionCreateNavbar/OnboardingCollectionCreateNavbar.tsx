import { Route } from 'nextjs-routes';

import { ONBOARDING_NEXT_BUTTON_TEXT_MAP } from '~/components/Onboarding/constants';
import { BackButton } from '~/contexts/globalLayout/GlobalNavbar/BackButton';
import { GalleryNameAndCollectionName } from '~/contexts/globalLayout/GlobalNavbar/CollectionEditorNavbar/GalleryNameAndCollectionName';
import {
  NavbarCenterContent,
  NavbarLeftContent,
  NavbarRightContent,
  StandardNavbarContainer,
} from '~/contexts/globalLayout/GlobalNavbar/StandardNavbarContainer';
import { CollectionSaveButtonWithCaptionFragment$key } from '~/generated/CollectionSaveButtonWithCaptionFragment.graphql';

import { CollectionSaveButtonWithCaption } from '../CollectionSaveButtonWithCaption';

type OnboardingCollectionCreateNavbarProps = {
  onBack: () => void;
  onNext: (caption: string) => Promise<void>;
  isCollectionValid: boolean;
  collectionName?: string;
  error?: string;
  queryRef: CollectionSaveButtonWithCaptionFragment$key;
};

export function OnboardingCollectionCreateNavbar({
  onBack,
  onNext,
  isCollectionValid,
  collectionName,
  error,
  queryRef,
}: OnboardingCollectionCreateNavbarProps) {
  const editGalleryRoute: Route = { pathname: '/onboarding/organize-gallery' };

  return (
    <StandardNavbarContainer>
      <NavbarLeftContent>
        <BackButton onClick={onBack} />
      </NavbarLeftContent>

      <NavbarCenterContent>
        <GalleryNameAndCollectionName
          editGalleryRoute={editGalleryRoute}
          galleryName={'My gallery'}
          collectionName={collectionName || 'New Collection'}
          rightText="Creating"
        />
      </NavbarCenterContent>

      <NavbarRightContent>
        <CollectionSaveButtonWithCaption
          disabled={!isCollectionValid}
          label={ONBOARDING_NEXT_BUTTON_TEXT_MAP['organize-collection']}
          onSave={onNext}
          hasUnsavedChange={true}
          error={error}
          queryRef={queryRef}
        />
      </NavbarRightContent>
    </StandardNavbarContainer>
  );
}