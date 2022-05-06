import React from "react";
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigate('/')
    },
    {
      label: 'Products',
      icon: 'pi pi-fw pi-list',
      items: [
        {
          label: 'All Products',
          icon: 'pi pi-list',
          command: () => navigate('/products')
        },
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            },

          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      command: () => navigate('/cart')
    }
  ];

  const navigate = useNavigate();

  return (
    <Menubar model={items} />
  )
}