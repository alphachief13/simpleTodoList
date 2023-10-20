import Sidebar from './Sidebar';
import Main from './Main'

function Section(){
    return(
        <>
        <div className='flex flex-row'>
            <Sidebar />
            <Main />
        </div>

        </>
    )
}

export default Section;