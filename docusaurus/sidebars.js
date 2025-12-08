const sidebarStructure = [
  'tef-exam',
  {
    type: 'category',
    label: 'Section A',
    items: [
      'section_A/topics',
      'section_A/topics_by_category',
      'section_A/topics_questions_by_category',
      'section_A/standard_questions_quick_reference',
      'section_A/questions_grammar_by_category',
      'section_A/vocab_by_category',
      'section_A/verbs_conjugations',
      'section_A/section_a_playbook',
      'section_A/section_a_playbook1',
    ],
  },
  {
    type: 'category',
    label: 'Section B',
    items: [
      'section_B/topic',
      'section_B/grammar_section_B',
      'section_B/section_b_playbook',
      'section_B/verbs_conjugations',
      'section_B/Vocabs',
    ],
  },
];

module.exports = {
  // Compatibility: export both the common v2 id and the v3 default key
  tutorialSidebar: sidebarStructure,
  sidebar: sidebarStructure,
};
