import MenuImage from "../../assets/icons/menu.svg"
import MarvelImage from "../../assets/icons/appBarLogo.svg"
import SearchImage from "../../assets/icons/search.svg"

import {
  HeaderHomeContainer,
} from './styles';

export function HeaderHome() {
  return (
    <HeaderHomeContainer>
      <MenuImage width={24} height={24} />
      <MarvelImage width={71} height={26} />
      <SearchImage width={24} height={24} />
    </HeaderHomeContainer>
  );
};