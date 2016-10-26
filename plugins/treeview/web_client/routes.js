import router from 'girder/router';
import events from 'girder/events';

import BodyView from './views/body';

router.route('treeview', 'treeview', function () {
    events.trigger('g:navigateTo', BodyView, {});
});
