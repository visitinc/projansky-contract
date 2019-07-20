# Ethereum Projansky Contract

An implementation of the [The Artist’s Reserved Rights Transfer And Sale
Agreement](The Artist’s Reserved Rights Transfer And Sale Agreement) for
ERC-721 tokens.


## Installation

2. Install the Truffle box inside of the directory your just created.
    ```javascript
    truffle unbox hackingbeauty/react-dapp-boilerplate
    ```

3. Start the dapp, then point your browser to localhost:3000.  If you want to use yarn instead of npm, just nuke the node_modules directory and run the command ```yarn install```.
    ```javascript
    npm run start || yarn start
    ```

4. Start your local blockchain (I use Ganache-CLI).
    ```javascript
    ganache-cli
    ```

5. Place your Smart Contract into the /contracts directory, then compile and migrate it.
    ```javascript
    truffle compile
    truffle migrate
    ```

6. Jest is included for testing React components and Truffle's own suite is incldued for Smart Contracts. Be sure you've compiled your contracts before running jest, or you'll receive some file not found errors.
    ```javascript
    // Runs Jest for component tests.
    npm run test || yarn test

    // Runs Truffle's test suite for smart contract tests.
    truffle test
    ```

7. To build the Dapp for production, use the build command. A production build of the entire Dapp will be placed in the /build folder.
    ```javascript
    npm run build || yarn build
    ```
