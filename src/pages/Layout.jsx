import React from "react";
import { Outlet, Link } from "react-router-dom";
import EthereumInteraction from "../Components/EthereumInteraction";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/account">User Account</Link>
          </li>
          <li>
            <Link to="/mynfts">My NFTs</Link>
          </li>
          <li>
            <Link to="/mysoldnfts">My Sold NFTs</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/createnft">Create NFT</Link>
          </li>
        </ul>

      </nav>
      <div> <EthereumInteraction/></div>
      <Outlet />
    </>
  );
};

export default Layout;
