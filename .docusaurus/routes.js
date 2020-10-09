
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','958'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','798'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','08d'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','a25'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','dda'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','9ff'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','a78'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','deb'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','cb0'),
  exact: true,
},
{
  path: '/guides',
  component: ComponentCreator('/guides','82c'),
  
  routes: [
{
  path: '/guides/',
  component: ComponentCreator('/guides/','423'),
  exact: true,
},
{
  path: '/guides/doc1',
  component: ComponentCreator('/guides/doc1','4e1'),
  exact: true,
},
{
  path: '/guides/workshops/finding-connecting-with-your-target-audience',
  component: ComponentCreator('/guides/workshops/finding-connecting-with-your-target-audience','6d0'),
  exact: true,
},
{
  path: '/guides/workshops/opening-up-spiritual-conversations',
  component: ComponentCreator('/guides/workshops/opening-up-spiritual-conversations','b80'),
  exact: true,
},
{
  path: '/guides/workshops/practical-ux-in-7-minutes',
  component: ComponentCreator('/guides/workshops/practical-ux-in-7-minutes','185'),
  exact: true,
},
{
  path: '/guides/workshops/win-hearts-to-win-souls',
  component: ComponentCreator('/guides/workshops/win-hearts-to-win-souls','9e8'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
