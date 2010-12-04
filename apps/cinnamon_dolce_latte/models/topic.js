// ==========================================================================
// Project:   CinnamonDolceLatte.Topic
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals CinnamonDolceLatte */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
CinnamonDolceLatte.Topic = SC.ChildRecord.extend(
/** @scope CinnamonDolceLatte.Topic.prototype */ {
	childRecordNamespace: CinnamonDolceLatte,
	
	title: SC.Record.attr(String)
	// posts: SC.Record.toMany('CinnamonDolceLatte.Post', {nested: true})
}) ;