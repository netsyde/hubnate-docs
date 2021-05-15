module.exports = {
  
  docs: [

    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        {
        type: 'category',
        label: 'Introduction',
        items: [
          'concepts/introduction/landing',
          'concepts/introduction/what-is-hubnate',
          'concepts/introduction/donate-user-guide',
          'concepts/introduction/glossary',
          ]
        },        
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   items: [
    //         'guides/landing',
          
    //   ]
    // },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/smart-contracts',
        {
          type: 'category',
          label: 'Core',
          items: [
        {
          type: 'category',
          label: 'Libraries',
          items: [
            // 'reference/core/libraries/BitMath',
          ]
        },
        {
          type: 'category',
          label: 'Interfaces',
          items: [
          ]
        },
        'reference/core/Hubnate',
        'reference/core/ChanceToken',
        // 'reference/core/UniswapV3PoolDeployer',
        ]
       },
      ],
    }
  ]
}