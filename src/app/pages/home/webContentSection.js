import ActionField from "../../components/action-field";
import { SectionSettings } from "../../components/section";

const WebContentSection = () => {
	return (
		<SectionSettings
			title={__('Website Content', 'wp-plugin-hostgator')}
			description={__('Create, manage & sort your story.', 'wp-plugin-hostgator')}
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-5">
				<ActionField
					label={__("Blog", "wp-plugin-hostgator")}
					buttonLabel={__("New Post", "wp-plugin-hostgator")}
					href={window.NewfoldRuntime.admin_url + 'post-new.php'}
					className={"hgwp-app-home-blog-action"}
				>
					{__('Write a new blog post.', 'wp-plugin-hostgator')}
				</ActionField>

				<ActionField
					label={__("Pages", "wp-plugin-hostgator")}
					buttonLabel={__("New Page", "wp-plugin-hostgator")}
					href={window.NewfoldRuntime.admin_url + 'post-new.php?post_type=page'}
					className={"hgwp-app-home-pages-action"}
				>
					{__('Add fresh pages to your website.', 'wp-plugin-hostgator')}
				</ActionField>

				<ActionField
					label={__("Categories", "wp-plugin-hostgator")}
					buttonLabel={__("Manage Categories", "wp-plugin-hostgator")}
					href={window.NewfoldRuntime.admin_url + 'edit-tags.php?taxonomy=category'}
					className={"hgwp-app-home-categories-action"}
				>
					{__('Organize existing content into categories.', 'wp-plugin-hostgator')}
				</ActionField>
			</div>
		</SectionSettings >
	);
};

export default WebContentSection;
