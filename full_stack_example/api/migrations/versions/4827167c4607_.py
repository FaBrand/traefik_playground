"""empty message

Revision ID: 4827167c4607
Revises: 
Create Date: 2019-01-05 15:52:09.902694

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4827167c4607'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('data_entry',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('data', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('data_entry')
    # ### end Alembic commands ###
