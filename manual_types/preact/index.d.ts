import * as preact from 'preact'

declare module 'preact' {

  interface Component<PropsType, StateType> {

    componentWillMount?():void;
		componentDidMount?():void;
		componentWillUnmount?():void;
		componentWillReceiveProps?(nextProps:PropsType,nextContext:any):void;
		shouldComponentUpdate?(nextProps:PropsType,nextState:StateType,nextContext:any):boolean;
		componentWillUpdate?(nextProps:PropsType,nextState:StateType,nextContext:any):void;
		componentDidUpdate?(previousProps:PropsType,previousState:StateType,previousContext:any):void;
	}

}
