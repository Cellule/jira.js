export interface GetUserDefaultColumns {
  /**
   * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example,
   * *5b10ac8d82e05b22cc7d4ef5*.
   */
  accountId?: string;
  /**
   * @deprecated
   * This parameter is no longer available See the [deprecation
   * notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/)
   * for details.
   */
  username?: string;
}
