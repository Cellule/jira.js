import { User } from './user';
import { SharePermission } from './sharePermission';
import { UserList } from './userList';
import { FilterSubscriptionsList } from './filterSubscriptionsList';

/**
 * Details about a filter. */
export interface Filter {
  /** The URL of the filter. */
  self?: string;
  /** The unique identifier for the filter. */
  id?: string;
  /** The name of the filter. Must be unique. */
  name: string;
  /** A description of the filter. */
  description?: string;
  /** The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings. */
  owner?: User[];
  /** The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*. */
  jql?: string;
  /** A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*. */
  viewUrl?: string;
  /** A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-2-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/2/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*. */
  searchUrl?: string;
  /** Whether the filter is selected as a favorite. */
  favourite?: boolean;
  /** The count of how many users have selected this filter as a favorite, including the filter owner. */
  favouritedCount?: number;
  /** The groups and projects that the filter is shared with. */
  sharePermissions?: SharePermission[];
  /** A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with. */
  sharedUsers?: UserList[];
  /** A paginated list of the users that are subscribed to the filter. */
  subscriptions?: FilterSubscriptionsList[];
}
