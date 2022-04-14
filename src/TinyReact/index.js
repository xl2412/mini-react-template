import createElement from './createElement'
import render from './render'
import mountNativeElement from './mountNativeElement'
import Component from './Component'

export default {
  createElement,
  render,
  mountElement: mountNativeElement,
  Component,
}