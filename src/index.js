import './app';

if (module.hot) {
  console.log('in module.hot');
	module.hot.accept();
}
