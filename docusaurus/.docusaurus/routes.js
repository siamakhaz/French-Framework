import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '157'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6a6'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f9b'),
            routes: [
              {
                path: '/docs-home',
                component: ComponentCreator('/docs-home', 'a47'),
                exact: true
              },
              {
                path: '/original',
                component: ComponentCreator('/original', 'b18'),
                exact: true
              },
              {
                path: '/section_A/questions_grammar_by_category',
                component: ComponentCreator('/section_A/questions_grammar_by_category', '64e'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/section_a_playbook',
                component: ComponentCreator('/section_A/section_a_playbook', '3a3'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/section_a_playbook1',
                component: ComponentCreator('/section_A/section_a_playbook1', 'a89'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/standard_questions_quick_reference',
                component: ComponentCreator('/section_A/standard_questions_quick_reference', '7b0'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/topics',
                component: ComponentCreator('/section_A/topics', 'f91'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/topics_by_category',
                component: ComponentCreator('/section_A/topics_by_category', '8fb'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/topics_questions_by_category',
                component: ComponentCreator('/section_A/topics_questions_by_category', '353'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/verbs_conjugations',
                component: ComponentCreator('/section_A/verbs_conjugations', '2ed'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_A/vocab_by_category',
                component: ComponentCreator('/section_A/vocab_by_category', '17e'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_B/grammar_section_B',
                component: ComponentCreator('/section_B/grammar_section_B', 'a3a'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_B/section_b_playbook',
                component: ComponentCreator('/section_B/section_b_playbook', '448'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_B/topic',
                component: ComponentCreator('/section_B/topic', '608'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_B/verbs_conjugations',
                component: ComponentCreator('/section_B/verbs_conjugations', 'fa0'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/section_B/Vocabs',
                component: ComponentCreator('/section_B/Vocabs', '550'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '7d2'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
