import { gql } from '@apollo/client';
import MenuFragment from './fragments/menus';

export const GET_MENUS = gql`
  query Menu {
    headerMenu: menuItems(where: { location: MAIN_MENU, parentId: "0" }) {
      edges {
        node {
          ...MenuFragment
          childItems {
            edges {
              node {
                ...MenuFragment
              }
            }
          }
        }
      }
    }
    footerMenu: menuItems(where: { location: FOOTER_MENU, parentId: "0" }) {
      edges {
        node {
          ...MenuFragment
        }
      }
    }
  }
  ${MenuFragment}
`;
