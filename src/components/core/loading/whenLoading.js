import { branch, renderNothing } from 'recompose';

export default branch(({ isLoading }) => !isLoading, renderNothing);
