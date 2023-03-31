import {NextPage} from 'next';
import Layout from '~components/organisms/Layout';
import Homepage from '~components/pages/Homepage';

const Index: NextPage = () => {
    return (
        <Layout>
                <Homepage />
        </Layout>
    );
};

export default Index;
