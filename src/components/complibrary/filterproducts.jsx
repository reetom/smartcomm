import React, {Component} from 'react';


const FilterProducts = (filterCriteria, filteredProducts) =>{

    var filterdProductsToReturn =[];

    var brandArray = filterCriteria.brandArray;
    var colorArray = filterCriteria.colorArray;
    var makeArray = filterCriteria.makeArray;
    console.log(brandArray);
    //Filter Brands First
    brandArray.map( brandName =>{

        //Loop through the producrts to compate brand name
        filteredProducts.map(product =>{
            if (brandName === product.filterableFacets.Brand)
                filterdProductsToReturn.push(product);
        });
    });

    //Filter Make second
    makeArray.map( materialName =>{

        //Loop through the producrts to compate brand name
        filterdProductsToReturn.map(product =>{
            if (materialName === product.filterableFacets.Material)
                filterdProductsToReturn.push(product);
        });
    });

    //Filter Color last
    colorArray.map( colorName =>{

        //Loop through the producrts to compate brand name
        filterdProductsToReturn.map(product =>{
            if (colorName === product.filterableFacets.Color)
                filterdProductsToReturn.push(product);
        });
    });

    return(filterdProductsToReturn);
}
export default FilterProducts;