# Generated by Django 3.0.8 on 2020-08-03 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('note', '0003_auto_20200803_2102'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='catagory',
            field=models.CharField(default='undefined', max_length=128),
            preserve_default=False,
        ),
    ]
