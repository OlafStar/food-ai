import {NextPage} from 'next';
import Layout from '~components/organisms/Layout';
import Homepage from '~components/organisms/Homepage';

const Index: NextPage = () => {
    return (
        <Layout>
            <Homepage />
        </Layout>
    );
};

export default Index;
