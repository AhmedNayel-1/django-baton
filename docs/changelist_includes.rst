Form includes
=========

.. image:: images/baton-cl-includes.png

Baton lets you include templates directly inside the change list page, in any position you desire. It's as simple as specifying the template path and the position of the template::

    @admin.register(News)
    class NewsAdmin(admin.ModelAdmin):
        #...
        baton_cl_includes = [
            ('news/admin_include_top.html', 'top', ),
            ('news/admin_include_below.html', 'below', )
        ]

In this case, Baton will place the content of the ``admin_include_top.html`` template at the top of the changelist section (above the search field), and the content of the ``admin_include_below.html`` below the changelist form.

You can specify the following positions:

+----------------------------------------+--------------------------------------------------------------------+
| Position                               |  Description                                                       |
+========================================+====================================================================+
| top                                    | the template is placed inside the changelist form, at the top      |
+----------------------------------------+--------------------------------------------------------------------+
| bottom                                 | the template is placed inside the changelist form, at the bottom   |
+----------------------------------------+--------------------------------------------------------------------+
| above                                  | the template is placed above the changelist form                   |
+----------------------------------------+--------------------------------------------------------------------+
| below                                  | the template is placed below the changelist form                   |
+----------------------------------------+--------------------------------------------------------------------+

And, of course, you can access the all the changelist view context variables inside your template.
