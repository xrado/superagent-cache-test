import React from 'react';
import ReactDom from 'react-dom';

import Cache from 'cache-service-cache-module';
import superagentCache from 'superagent-cache';

var cache = new Cache({defaultExpiration: 60, verbose:true});
var request = superagentCache(null,cache);

const App = React.createClass({

	request(){
		request.get('/',function(res){
			console.log(res);
		})
	},

	clear(){
		cache.flush();
	},

	render(){
		return (
			<div>
				<h1>Test app</h1>
				<button onClick={this.request}>request</button>
				<br/><br/>
				<button onClick={this.clear}>clear</button>
			</div>
		)
	}
})

ReactDom.render(
	<App />,
	document.getElementById('root')
);