const main = async () => {
    let provider = ethers.getDefaultProvider();
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await provider.getBalance(deployer.address);
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const Token = await hre.ethers.deployContract("WavePortal");
    const portal = await Token.waitForDeployment();
  
    console.log("WavePortal address: ", portal.target);

    const waveContract = await hre.ethers.deployContract("WavePortal", { value: hre.ethers.parseEther('0.001') });
    await waveContract.waitForDeployment();
    console.log("Contract deployed to:", waveContract.target);
    
  };
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });