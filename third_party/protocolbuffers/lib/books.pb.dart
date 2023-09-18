//
//  Generated code. Do not modify.
//  source: books.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class Books extends $pb.GeneratedMessage {
  factory Books({
    $core.Iterable<$core.String>? bookNameList,
  }) {
    final $result = create();
    if (bookNameList != null) {
      $result.bookNameList.addAll(bookNameList);
    }
    return $result;
  }
  Books._() : super();
  factory Books.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Books.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'Books', createEmptyInstance: create)
    ..pPS(1, _omitFieldNames ? '' : 'bookNameList')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Books clone() => Books()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Books copyWith(void Function(Books) updates) => super.copyWith((message) => updates(message as Books)) as Books;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static Books create() => Books._();
  Books createEmptyInstance() => create();
  static $pb.PbList<Books> createRepeated() => $pb.PbList<Books>();
  @$core.pragma('dart2js:noInline')
  static Books getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Books>(create);
  static Books? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get bookNameList => $_getList(0);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
