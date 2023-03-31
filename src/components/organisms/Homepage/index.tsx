import Input from '~components/atoms/Input';
import Form from '~components/molecules/MainForm';
import {HomepageContainer, LeftColumn, RightColumn} from './styles';

const Homepage = () => {
    return (
        <HomepageContainer>
            <LeftColumn>
                <Form />
            </LeftColumn>
            <RightColumn />
        </HomepageContainer>
    );
};

export default Homepage;
