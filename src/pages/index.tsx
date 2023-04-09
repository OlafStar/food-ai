import {NextPage} from 'next';
import Layout from '~components/organisms/Layout';
import Homepage from '~components/organisms/Homepage';
import Providers from '~providers/index';

const Index: NextPage = () => {
    return (
        <Providers>
            <Layout>
                <Homepage />
            </Layout>
        </Providers>
    );
};

export default Index;
