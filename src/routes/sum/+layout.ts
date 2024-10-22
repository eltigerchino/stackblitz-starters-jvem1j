import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
	const { a } = await parent();
	return { b: a + 1 };
};
