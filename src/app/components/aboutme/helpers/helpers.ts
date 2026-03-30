import { Dispatch, SetStateAction } from 'react';

type SkillsContainerProps = {
  setSingularExpansion: Dispatch<SetStateAction<string>>;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  isHovered: boolean;
  section: string;
};

export const handleClickSkillsContainer = ({
  setSingularExpansion,
  setIsHovered,
  isHovered,
  section,
}: SkillsContainerProps) => {
  if (isHovered) {
    setSingularExpansion('none');
    setIsHovered(false);
  } else {
    setSingularExpansion(section);
    setIsHovered(true);
  }
};

export const handleCloseSkillsContainer = ({
  setSingularExpansion,
  setIsHovered,
}: Pick<SkillsContainerProps, 'setSingularExpansion' | 'setIsHovered'>) => {
  setSingularExpansion('none');
  setIsHovered(false);
};
