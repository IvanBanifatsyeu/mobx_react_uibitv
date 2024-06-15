import React from "react";
import "./App.css";
import counter from "./store/counter";
import { observer } from "mobx-react-lite";

function Counter() {
	return (
		<div className="counter">
			{"Counter = " + counter.count}
			<br />
			{counter.total}
			<div className="btns">
				<button className="btn" onClick={() => counter.increment()}>
					+
				</button>
				<button className="btn" onClick={() => counter.decrement()}>
					-
				</button>
			</div>
		</div>
	);
}

export default observer(Counter);
