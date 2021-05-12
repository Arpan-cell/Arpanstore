const inistate={
    products:[],
    totalprice:0,
    totalqty:0
    }
    const Cartreducers=(state=inistate,action)=>{
    let findPro;
    let index;
    switch(action.type){
    case 'ADD_TO_CART':
    console.log(action.payload.product.id);
    const {product,qty}=action.payload
    console.log( product.id,qty);
    const check=state.products.find(pr=>pr.id===product.id)
    if(check){
    return state;
    }else{
    const Tprice=state.totalprice+product.price*qty;
    const Tqty=state.totalqty+qty
    product.qty=qty
    return{
    ...state,products:[...state.products,product],totalprice:Tprice,
    totalqty:Tqty
    }
    }
    case 'inc':
    findPro=state.products.find(product=>product.id===action.payload)
    index=state.products.findIndex(product=>product.id===action.payload)
    findPro.qty+=1;
    state.products[index]=findPro
    return{
    ...state,
    totalprice:state.totalprice+findPro.price,totalqty:state.totalqty+1
    }
    case 'dec':
    findPro=state.products.find(product=>product.id===action.payload)
    index=state.products.findIndex(product=>product.id===action.payload)
    if(findPro.qty>1){
    findPro.qty-=1;
    state.products[index]=findPro
    return{
    ...state,
    totalprice:state.totalprice-findPro.price,totalqty:state.totalqty-1
    }
    }else{
    return state
    }
    
    case 'REMOVE':
    findPro=state.products.find(product=>product.id===action.payload)
    const filtered=state.products.filter(product=>product.id!==action.payload)
    return{
    ...state,
    products:filtered,
    totalprice:state.totalprice-findPro.price*findPro.qty,totalqty:state.totalqty-findPro.qty
    
    
    }
    
    
    
    default:
    return state;
    }
    
    }
    export default Cartreducers