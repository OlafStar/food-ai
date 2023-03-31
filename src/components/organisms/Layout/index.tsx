import {ReactNode} from 'react';
import NavigationBar from '~components/molecules/NavigationBar';
import {HTMLHead} from './HTMLHead';
import {Container} from './styles';

type LayoutProps = {
    children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <HTMLHead pageTitle="Food AI" />
            <Container>
                <NavigationBar />

                {children}
            </Container>
        </>
    );
};

export default Layout;
