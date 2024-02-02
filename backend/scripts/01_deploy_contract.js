async function main(){
    const MyContract = await ethers.getContractFactory("taskcontract");
    const myContract = await MyContract.deploy();
    console.log("contract connect to ",myContract.address);
  
}

main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });