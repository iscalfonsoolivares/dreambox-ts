import { Component } from 'react';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router-dom';

import { StroreState } from '../../store/rootReducer'

interface IAuth { 
  isAuthenticated: boolean; 
  token: string 
}

interface MixedComponentProps extends RouterProps {
  isAuthenticated: boolean;
  token: string;
}

const authGuard = (OriginalComponent: any) => {

  class MixedComponent extends Component<MixedComponentProps> {

    checkAuth(): void {
      if(!this.props.isAuthenticated && !this.props.token){
        this.props.history.push('/login');
      }
    }

    componentDidMount(){
      this.checkAuth();
    }

    componentDidUpdate(){
      this.checkAuth();
    }

    render() {
      return <OriginalComponent { ...this.props } />
    }

  }

  function mapStateToProps(state: StroreState): IAuth {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token
    }
  }

  return connect(mapStateToProps)(MixedComponent);

}

export default authGuard;