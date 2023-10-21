import Link from 'next/link';
import A from '../components/A';
import Head from 'next/head';
import MainContainer from '../components/MainContainer';

const Index = () => {
    return (
        <MainContainer keywords={'main page'}>
            <div>
                <div className='navbar'>
                    <A  href={'/'} text={'Главная'}/>
                    <A  href={'/users'} text={'Пользователи'}/>
                </div>
                <h1>Главная страница</h1>
                
            </div>
        </MainContainer>
    )
}

export default Index
