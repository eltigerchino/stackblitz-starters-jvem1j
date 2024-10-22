import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { a, b } = await parent();
	return { c: a + b };
};
