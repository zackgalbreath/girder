import $ from 'jquery';

import router from 'girder/router';
import versionInfo from 'girder/version';
import View from 'girder/views/View';
import { cancelRestRequests, apiRoot, staticRoot } from 'girder/rest';
import events from 'girder/events';
import { getCurrentUser } from 'girder/auth';

import FrontPageTemplate from 'girder/templates/body/frontPage.pug';

import 'girder/stylesheets/body/frontPage.styl';

import paragraphMd from 'girder/templates/body/content/paragraph.md';
import currentUserMd from 'girder/templates/body/content/currentUser.md';
import anonUserMd from 'girder/templates/body/content/anonUser.md';
import gitBuildMd from 'girder/templates/body/content/gitBuild.md';
import dateBuildMd from 'girder/templates/body/content/dateBuild.md';
import versionInfoMd from 'girder/templates/body/content/versionInfo.md';

function subvars(text) {
    const currentUser = getCurrentUser();

    return text
      .replace('[[[loginState]]]', currentUser ? currentUserMd : anonUserMd)
      .replace('[[[buildInfo]]]', versionInfo.git ? gitBuildMd : dateBuildMd)
      .replace('[[[apiRoot]]]', apiRoot)
      .replace('[[[username]]]', currentUser ? currentUser.get('login') : '')
      .replace('[[[SHA]]]', versionInfo.SHA || '')
      .replace('[[[shortSHA]]]', versionInfo.shortSHA || '')
      .replace('[[[date]]]', versionInfo.date ? new Date(versionInfo.date).toLocaleDateString() : '')
      .replace('[[[apiVersion]]]', versionInfo.apiVersion || '');
}

/** This is the view for the front page of the app.
 */
var FrontPageView = View.extend({
    events: {
        'click .g-register-link': function () {
            events.trigger('g:registerUi');
        },
        'click .g-login-link': function () {
            events.trigger('g:loginUi');
        },
        'click .g-collections-link': function () {
            router.navigate('collections', {trigger: true});
        },
        'click .g-quicksearch-link': function () {
            $('.g-quick-search-container .g-search-field').focus();
        },
        'click .g-my-account-link': function () {
            router.navigate('useraccount/' + getCurrentUser().get('_id') +
                                   '/info', {trigger: true});
        },
        'click .g-my-folders-link': function () {
            router.navigate('user/' + getCurrentUser().get('_id'), {trigger: true});
        }
    },

    initialize: function () {
        cancelRestRequests('fetch');
        this.render();
    },

    render: function () {
        const paragraph = subvars(paragraphMd);

        this.$el.html(FrontPageTemplate({
            staticRoot: staticRoot,
            title: 'Girder',
            subtitle: 'Data management platform',
            paragraph: paragraph
        }));

        return this;
    }
});

export default FrontPageView;
