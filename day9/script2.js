function getUserDetails(userId){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({name:Alice});
        },1000);
    });
}
function getUserOrders(userId){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve([order1,order2]);
        },2000);
    });
}
function getUserWishlist(userId){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve([Item1,Item2]);
        },3000);
    });
}
function fetchUserDashboard(userId){
    return Promise.all([
        getUserDetails(userId),
        getUserOrders(userId),
        getUserWishlist(userId)
    ]);
    .then(([userDetails,userOrders,userWishlist])=>{
        console.log("User Details:",userDetails)
        console.log("User Orders:",userOrders)
        console.log("User Wishlist:",userWishlist)
    });
    catch(error=>{
        console.error("Error fetching user dashboard:",error);
    });
}