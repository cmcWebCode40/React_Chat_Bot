import React from "react";
import {ConnectedTaskList} from "./TaskList";
import {connect} from "react-redux";

const Dashboard = ({ groups }) => {

	return (
		<div>
			<h1>Dashboard</h1>
            {groups.map(group =>(
                <div key={group.id}>
   <ConnectedTaskList  id={group.id} name={group.name}/>
                </div>
             
            ))}
            
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		groups: state.groups,
	};
};

export const Connecteddashboard = connect(mapStateToProps)(Dashboard);




export default Dashboard;
