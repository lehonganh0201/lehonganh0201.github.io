import post from "../../data/posts.json";
import './Table.css'
const Table = () =>{
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Team</th>
                    </tr>
                </thead>

                <tbody>
                    {post.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.points}</td>
                            <td>{item.team}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;