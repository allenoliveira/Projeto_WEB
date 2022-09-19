import React from 'react';
import Votacidade from './Votacidade';

const Ganhador = ()=> {
    if (Votacidade >= 10){
      return Votacidade
    }else{
        return null
    }
}