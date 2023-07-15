import { Button } from '@chakra-ui/react';
import React from 'react';

type ConnectWalletProps = {

};

const ConnectWallet: React.FC<ConnectWalletProps> = () => {

    return (
        <Button color={'white'}
            rounded={'md'}
            _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
            }}>
            Connect Wallet
        </Button>
    )

}
export default ConnectWallet;