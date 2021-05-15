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
          ]
        },        
        // {
        // type: 'category',
        // label: 'V3 Overview',
        // items: [
        //   'concepts/V3-overview/faq',
        //   'concepts/V3-overview/concentrated-liquidity',
        //   'concepts/V3-overview/fees',
        //   'concepts/V3-overview/range-orders',
        //   'concepts/V3-overview/oracle',
        //   'concepts/V3-overview/glossary',
        //   ]
        // },
        // {
        // type: 'category',
        // label: 'Advanced Topics',
        // items: [
        //   'concepts/advanced/research',
        //   'concepts/advanced/resources',
        //   'concepts/advanced/integration-issues',
        //   ]
        // },
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