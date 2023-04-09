import Input from '~components/atoms/Input';
import Form from '~components/molecules/MainForm';
import UserInformations from '~components/molecules/UserInformations';
import {HomepageContainer, LeftColumn, RightColumn} from './styles';

const Homepage = () => {
    return (
        <HomepageContainer>
            <LeftColumn>
                <Form />
                <UserInformations />
            </LeftColumn>
            <RightColumn />
        </HomepageContainer>
    );
};

export default Homepage;
