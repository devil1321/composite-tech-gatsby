// @ts-ignore
const path = require('path')

const products = [{id:1}]
// @ts-ignore
exports.createPages = async ({ actions, graphql }) => {
    products.forEach((p:any) => {
      // @ts-ignore
      const { id } = p;
     actions.createPage({
        path: `/details/${id}`,  // Replace with the desired path structure
        // @ts-ignore
        component: path.resolve('./src/templates/details.template.tsx'), // Path to your DetailsTemplate component
        context: {
          p,  // Pass any additional data you need to the template
        },
      });
    });
  };

  
