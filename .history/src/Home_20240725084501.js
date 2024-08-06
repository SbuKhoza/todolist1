import './Home.css';

function Home() {
    return (
        <div className="maincont">

            <div className="dash">


            </div>

            <div className='content'>
                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='tag'>
                    <h3>Yesterday you said Today. </h3>
                </div>
            </div>

        </div>
    );
}

export default Home;