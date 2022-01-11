// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

// See https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./common/AccessControlMixin.sol";
import "./common/NativeMetaTransaction.sol";
import "./common/IMintableERC20.sol";

contract RootMintableERC20 is
ERC20,
AccessControlMixin,
NativeMetaTransaction,
IMintableERC20
{
    bytes32 public constant PREDICATE_ROLE = keccak256("PREDICATE_ROLE");

    constructor(string memory name_, string memory symbol_)
    public
    ERC20(name_, symbol_)
    {
        _setupContractId("RootMintableERC20");
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(PREDICATE_ROLE, _msgSender());

        _initializeEIP712(name_);
    }

    /**
     * @dev See {IMintableERC20-mint}.
     */
    function mint(address user, uint256 amount) external override only(PREDICATE_ROLE) {
        _mint(user, amount);
    }
}
